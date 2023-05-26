import axios from 'axios';

export const ROOT_URL = 'http://localhost:8080';
const API_URL = `${ROOT_URL}/api`;

export async function getBooks() {
  try {
    const response = await axios.get(`${API_URL}/books`);
    return response.data;
  } catch (error) {
    console.error('There was an error!', error);
  }
}