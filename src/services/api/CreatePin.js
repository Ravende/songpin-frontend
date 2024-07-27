import client from "./client";

const get = async url => {
  const res = await get(url);
  return res?.data;
};

export const post = async (url = '/pins', data) => {
  const res = await post(url, data);
  return res?.data;
};

// export const PostPin = async (request) => {
//   try {
//       const response = await client.post('/pins', request);
//       console.log('Response from server:', response);
//       return response;
//   } catch (error) {
//       console.error('Error posting pin:', error);
//       return { status: error.response ? error.response.status : 500, data: error.message };
//   }
// };
