import axios from "axios";

const request = axios.create({
  baseURL: "https://api.github.com/repos/angular/angular-cli/",
  headers: {
    Accept: "application/vnd.github+json",
    Authorization: process.env.REACT_APP_TOKEN,
  },
});

export default request;
