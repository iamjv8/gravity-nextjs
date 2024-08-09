import axios from "axios";

const api = axios.create({
  baseURL: "https://gravity-express.onrender.com/", // our API base URL
});

api.interceptors.request.use(
  (config) => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token"); // Assuming you store the token in localStorage
      if (token) {
        config.headers.Authorization = `${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const signup = (body) => {
  return api.post("/signup", body);
};

export const login = (body) => {
  return api.post("/login", body);
};

export const getAllTypes = () => {
  return api.get("/type");
};

export const getAllCategories = () => {
  return api.get("/category");
};

export const addTransaction = (body) => {
  return api.post("/addTransaction", body);
};

export const getAllTransactions = (body) => {
  return api.post("/getTransaction", body);
};

export const getStatistics = (body) => {
  return api.post("/dashboardStatistics", body);
};
