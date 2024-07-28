import client from "./client";

export const postSignup = async userData => {
  try {
    const res = await client.post("/signup", userData);
    console.log(userData);
  } catch (e) {
    console.error(e);
    throw e;
  }
};
