import axios from "axios";

const api = axios.create({
  baseURL: "https://demohotelsapi.pythonanywhere.com",
});

export const getHotels = async (params = {}) => {
  const response = await api.get("/hotels/", { params });
  return response.data;
};

export const getHotelById = async (id) => {
  const response = await api.get(`/hotels/${id}/`);
  return response.data;
};
