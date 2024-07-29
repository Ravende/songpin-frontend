import client from "./client";

export const postSignup = async userData => {
  try {
    const res = await client.post("/signup", userData);
    console.log(userData, "회원가입 성공");
  } catch (e) {
    console.error(e);
    throw new Error(e.response.data.message);
  }
};

export const postLogin = async userData => {
  try {
    const res = await client.post("/login", userData);
    const token = res.data.accessToken;
    localStorage.setItem("accessToken", token);
    console.log(token);
    return { token };
  } catch (e) {
    if (e.response) {
      return { error: e.response.data.message, status: e.response.status };
    } else {
      console.error(e);
    }
  }
};
