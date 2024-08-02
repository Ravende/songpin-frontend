import client from "./client";

const get = async url => {
    const res = await client.get(url);
    return res?.data;
};

const post = async (url, data) => {
    const res = await client.post(url, data);
    return res?.data;
};

export const postMarkers = async (request) => {
    try {
        const request = {
                "boundCoords": {
                    "swLat": 35.0,
                    "swLng": 126.0,
                    "neLat": 40.0,
                    "neLng": 129.0
                },
                "genreNameFilters": null
        };
        const data = await post(`/map`, request);
        return data;
    } catch (error) {
        throw new Error("전체 기간 핀 로드 실패");
    }
};
