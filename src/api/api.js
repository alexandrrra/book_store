import axios from 'axios';

export const ROOT_URL = 'http://localhost:8080';
const API_URL = `${ROOT_URL}/api`;

// получить каталог книг
export async function getBooks() {
  try {
    const response = await axios.get(`${API_URL}/books`);
    return response.data;
  } catch (error) {
    console.error('There was an error!', error);
  }
}

//получить книгу
export async function getOneBook(id) {
  try {
    const response = await axios.get(`${API_URL}/books/${id}`);
    return response.data;
  } catch (error) {
    console.error('There was an error!', error);
  }
}