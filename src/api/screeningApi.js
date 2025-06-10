import axiosClient from "@/api/config/axiosClient.js";

const screeningApi = {
  getScreeningsByDate: (date) => {
    const url = `/screenings?date=${date}`;
    return axiosClient.get(url);
  },
  getScreeningsByDateRange: (startDate, endDate) => {
    const url = `/screenings/range?startDate=${startDate}&endDate=${endDate}`;
    return axiosClient.get(url);
  },
  getScreeningsByFilmId: (filmId) => {
    const url = `/screenings/films/${filmId}`;
    return axiosClient.get(url);
  },
  getSetsByScreeningId: (screeningId) => {
    const url = `/seats/${screeningId}`;
    return axiosClient.get(url);
  },
};

export default screeningApi;
