import client from "./client";

export const getExSpotify = async ({ keyword }) => {
  try {
    const res = await client.get(`/external/songs?keyword=${keyword}`);
    console.log(res);
    return res.data;
  } catch (e) {
    console.error(e);
  }
};
