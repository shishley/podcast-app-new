import fetch from "node-fetch";

const API_URL = "https://podcast-api.netlify.app";

const getPreviews = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
};

const getGenre = async (id) => {
  const response = await fetch(`${API_URL}/genre/${id}`);
  const data = await response.json();
  return data;
};

const getShow = async (id) => {
  const response = await fetch(`${API_URL}/id/${id}`);
  const data = await response.json();
  return data;
};

export { getPreviews, getGenre, getShow };
