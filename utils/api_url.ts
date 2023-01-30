const API_URL = process.env.NODE_ENV==="development" ? "http://localhost:8000/api" : "https://tform.onrender.com/api"
export const FORM_DATA = `${API_URL}/form_data`
export const SINGLE_FORM_DATA = (id: string) => `${API_URL}/form_data/${id}`