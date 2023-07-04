import axios from "axios";

const TOKEN = "";
const CHAT_ID = "";

const instance = axios.create({
  baseURL: "https://64378c75894c9029e8c02c43.mockapi.io/api-tweets/",
  params: {
    page: 1,
    limit: 10,
  },
});
