import axios from "axios";

const API = axios.create({
  baseURL: "https://http://localhost:5001/",
}); // can set a base url here

export const fetchRooms = () => API.get("/rooms");
