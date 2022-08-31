class MainApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }
	_getResponseData(res) {
    return (!res.ok) ? 
      Promise.reject(`Ошибка: ${res.status} ${res.statusText}`) :
      res.json();
  }
	getSavedMovies() {
		return fetch(`${this._baseUrl}/movies`, {
      method: 'GET',
      headers: this._headers,
      credentials: 'include',
    })
		.then(this._getResponseData)
	}
  addSavedMovies(data) {
		return fetch(`${this._baseUrl}/movies`, {
			method: 'POST',
      credentials: 'include', 
      headers: this._headers,
      body: JSON.stringify({
        country: data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: data.image,
        trailerLink:data.trailerLink,
        nameRU: data.nameRU,
        nameEN: data.nameEN,
        thumbnail: data.thumbnail,
        movieId: data.movieId,
      })
    })
    .then(this._getResponseData)
		}
	removeSavedMovies(_id) {
		return fetch(`${this._baseUrl}/movies/${_id}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: this._headers,
    })
    .then(this._getResponseData)
	}
	getUserInfo() {
		return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
      credentials: 'include',
    })
    .then(this._getResponseData)
	}
  editProfile(name, email) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        email: email,
      })
    })
    .then(this._getResponseData)
  }

}

export const mainApi = new MainApi({
	baseUrl: 'http://localhost:3001',
	// baseUrl: `${window.location.protocol}${process.env.REACT_APP_API_URL || '//localhost:3001'}`,
	headers: {
		// authorization: 'ae237eb9-5aba-4050-8c86-8e74ad63731d', //для авторизации через токен
		'Content-Type': 'application/json'
	}
})