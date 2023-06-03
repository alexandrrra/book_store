import axios from 'axios';

axios.defaults.withCredentials = true;

export const ROOT_URL = 'http://localhost:8080';
const API_URL = `${ROOT_URL}/api`;

// получить каталог книг
export async function getBooks() {
  try {
    const response = await axios.get(`${API_URL}/books`);
    return response.data.map(
      book => ({
        ...book,
        image_url: ROOT_URL + '/' + book.image_url
      })
    );
  } catch (error) {
    console.error('There was an error!', error);
    return [];
  }
}

export async function getNewBooks() {
  try {
    const response = await axios.get(`${API_URL}/newBooks`);
    return response.data.map(
      book => ({
        ...book,
        image_url: ROOT_URL + '/' + book.image_url
      })
    );
  } catch (error) {
    console.error('There was an error!', error);
    return [];
  }
}

//получить книгу
export async function getOneBook(id) {
  try {
    const response = await axios.get(`${API_URL}/books/${id}`);
    return {
      ...response.data,
      image_url: ROOT_URL + '/' + response.data.image_url
    };
  } catch (error) {
    console.error('There was an error!', error);
    return null;
  }
}

export const createUser = async (login, password) => {
  try {
      const response = await axios.post(
          `${API_URL}/user`,
          { login, password }
      );
      return response.data;
  } catch (error) {
      console.error(error);
      return null;
  }
};

export const setToken = async (login, password) => {
  try {
      const response = await axios.post(
          `${API_URL}/token`,
          { login, password }
      );
      return response.data;
  } catch (error) {
      console.error(error);
      return null;
  }
};

export const refreshToken = async () => {
  try {
      const response = await axios.put(
          `${API_URL}/token`
      );
      return response.data;
  } catch (error) {
      console.error(error);
      return null;
  }
};

export const deleteToken = async () => {
  try {
      await axios.delete(
          `${API_URL}/token`
      );
      return true;
  } catch (error) {
      console.error(error);
      return false;
  }
};

export const getProfile = async () => {
  try {
      const response = await axios.get(
          `${API_URL}/profile`
      );
      return response.data;
  } catch (error) {
      console.error(error);
      return null;
  }
};

export const updateProfile = async data => {
  try {
      const response = await axios.put(
          `${API_URL}/profile`,
          data
      );
      return response.data;
  } catch (error) {
      console.error(error);
      return null;
  }
};

export const sendOneTimePassword = async email => {
  try {
      await axios.post(
          `${API_URL}/sendOneTimePassword`,
          { email }
      );
      return true;
  } catch (error) {
      console.error(error);
      return false;
  }
};

export const getFavorite = async () => {
  try {
      const response = await axios.get(
          `${API_URL}/user/favorite`
      );
      return response.data;
  } catch (error) {
      console.error(error);
      return null;
  }
};

export const getCart = async () => {
  try {
      const response = await axios.get(
          `${API_URL}/user/cart`
      );
      return response.data;
  } catch (error) {
      console.error(error);
      return null;
  }
};
