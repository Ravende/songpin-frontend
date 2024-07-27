import client from "./client";

const get = async url => {
  const res = await client.get(url);
  return res?.data;
};

const post = async (url, data) => {
  const res = await client.post(url, data);
  return res?.data;
};

export const getPlaylists = async () => {
  const url = '/playlists/main';
  try {
    const result = await get(url);
    // console.log(result);
    return result;
  } catch (error) {
    console.error("Error fetching playlists:", error);
    throw error;
  }
};

export const PostPlaylist = async (playlistName, visibility) => {
  const url = '/playlists'; 
  const data = {
    playlistName,
    visibility
  };
  try {
    const result = await post(url, data);
    return result;
  } catch (error) {
    console.error("Error creating playlist:", error);
    throw error;
  }
};