import client from "./client";

//post 요청 예시
export const postExample = async (title, content) => {
  try {
    const response = await client.post(`/요청 주소`, {
      title: title,
      content: content,
    });
    return Promise.resolve(response);
  } catch (error) {
    return Promise.resolve(error);
  }
};

//get 요청 예시
export const getExample = async () => {
  try {
    const response = await client.get(`/요청 주소`);
    return Promise.resolve(response);
  } catch (error) {
    return Promise.resolve(error);
  }
};
