import axios from 'axios';

axios.defaults.withCredentials = true;

export const ROOT_URL = 'http://localhost:8080';
const API_URL = `${ROOT_URL}/api`;

const patchImageUrl = url => `${ROOT_URL}/${url}`;

// получить каталог книг
export const getBooks = async (newOnly) => {
  try {
    const response = await axios.get(
      `${API_URL}/books`,
      {
        params: { newOnly }
      }
    );
    return response.data.map(
      book => ({
        ...book,
        image_url: patchImageUrl(book.image_url)
      })
    );
  } catch (error) {
    console.error(error);
    return [];
  }
}

//получить книгу
export const getOneBook = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/books/${id}`);
    return {
      ...response.data,
      image_url: patchImageUrl(response.data.image_url)
    };
  } catch (error) {
    console.error(error);
    return null;
  }
};

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

export const getProducts = async () => {
  try {
      const response = await axios.get(
          `${API_URL}/products`
      );
      return response.data.map(
        book => ({
          ...book,
          image_url: patchImageUrl(book.image_url)
        })
      );
  } catch (error) {
      console.error(error);
      return null;
  }
};

export const addProduct = async (id) => {
  try {
    await axios.post(
      `${API_URL}/products`,
      {id}
    );
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const updateProduct = async (id, quantity) => {
  try {
    await axios.put(
      `${API_URL}/products/${id}`,
      {quantity}
    );
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const deleteProduct = async (id) => {
  try {
    await axios.delete(
      `${API_URL}/products/${id}`
    );
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const getFavorites = async () => {
  try {
      const response = await axios.get(
          `${API_URL}/favorites`
      );
      return response.data.map(
        book => ({
          ...book,
          image_url: patchImageUrl(book.image_url)
        })
      );
  } catch (error) {
      console.error(error);
      return null;
  }
};

export const addFavorite = async (id) => {
  try {
    await axios.post(
      `${API_URL}/favorites`,
      {id}
    );
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const deleteFavorite = async (id) => {
  try {
    await axios.delete(
      `${API_URL}/favorites/${id}`
    );
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const getFilterOptions = async () => {
  try {
      const response = await axios.get(
          `${API_URL}/filterOptions`
      );
      return response.data;
  } catch (error) {
      console.error(error);
      return null;
  }
};
