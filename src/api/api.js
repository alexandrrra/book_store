import axios from 'axios';

export const ROOT_URL = 'http://localhost:8080';
const API_URL = `${ROOT_URL}/api`;

// получить каталог книг
export async function getBooks() {
  try {
    const response = await axios.get(`${API_URL}/books`);
    const books = response.data.map((book) => {
      book.image_url = ROOT_URL + '/' + book.image_url;
      return book;
    });
    return books;
  } catch (error) {
    console.error('There was an error!', error);
  }
}

//получить книгу
export async function getOneBook(id) {
  try {
    const response = await axios.get(`${API_URL}/books/${id}`);
    response.data[0].image_url = ROOT_URL + '/' + response.data[0].image_url
    return response.data;
  } catch (error) {
    console.error('There was an error!', error);
  }
}