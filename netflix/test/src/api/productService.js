import axios from "axios";

// Point this at your Spring Boot backend
const BASE_URL = "http://localhost:8080/api/v1/products";

const api = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});

export const productService = {
  getAll: () => api.get("/"),
  getById: (id) => api.get(`/${id}`),
  create: (product) => api.post("/", product),
  update: (id, product) => api.put(`/${id}`, product),
  delete: (id) => api.delete(`/${id}`),
  searchByName: (name) => api.get(`/search`, { params: { name } }),
  getByCategory: (category) => api.get(`/category/${category}`),
};

export default api;