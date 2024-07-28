import client from "./client";

const get = async url => {
  const res = await client.get(url);
  return res?.data;
};

const post = async (url, data) => {
  const res = await client.post(url, data);
  return res?.data;
};

// 플레이리스트 메인 api 연결
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

// 플레이리스트 상세정보 api 연결 
export const getPlaylistDetail = async (playlistId) => {
  const url = `/playlists/${playlistId}`;
  try {
    const result = await get(url);
    return result;
  } catch (error) {
    console.error("Error fetching playlist detail:", error);
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

//북마크 추가
export const addBookmark = async (playlistId) => {
  const url = '/bookmarks';
  const data = { playlistId };
  try {
    const response = await client.post(url, data);
    return response?.data;
  } catch (error) {
    console.error("Error adding bookmark:", error);
    throw error;
  }
};

//북마크 취소 
export const deleteBookmark = async (bookmarkId) => {
  const url = `/bookmarks/${bookmarkId}`;
  try {
    await client.delete(url);
  } catch (error) {
    console.error("Error deleting bookmark:", error);
    throw error;
  }
};