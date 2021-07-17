const API_KEY = '19367705-6c391461160466e2850694aab';
const BASE_URL = 'https://pixabay.com/api';

export function fetchImg(query, page) {
  const url = `${BASE_URL}/?image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=12&key=${API_KEY}`;

  return fetch(url).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error('Oops! Nothing found'));
  });
}

const api = {
  fetchImg,
};

export default api;
