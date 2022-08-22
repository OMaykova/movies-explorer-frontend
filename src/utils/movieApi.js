class MovieApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }
  _getResponseData(res) {
    return (!res.ok) ? 
      Promise.reject(`Ошибка: ${res.status} ${res.statusText}`) 
      :
      res.json();
  }
  getMovies() {
    return fetch(`${this._baseUrl}/beatfilm-movies`, {
      headers: this._headers,
    })
    .then(this._getResponseData)
  }
}
export const movieApi = new MovieApi({
  baseUrl: 'https://api.nomoreparties.co',
  headers: {
    'Content-Type': 'application/json'
  }
})