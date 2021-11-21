export const BASE_URL = 'http://localhost:3001/api';

const _checkResponse = (res) => {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
}

export const register = (email, password, name) => {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password, name })
    })
        .then((response) => {
            return (response.ok)
        });
}

export const authorize = (email, password) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
        .then((response) => {
            return (response.ok)
        })
        .catch(err => console.log(err))
}

export const out = () => {
    return fetch(`${BASE_URL}/signout`, {
        method: 'POST',
        credentials: 'include',
    })
        .then((response => { return _checkResponse(response) }))
        .catch(err => console.log(err))
}

export const getUserInfo = () => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        credentials: 'include',
    })
        .then((response => { return _checkResponse(response) }))
}

export const updateUser = (name, email) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'PATCH',
        credentials: 'include',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email })
    })
        .then((response) => {
            return _checkResponse(response)
        });
}


export const getMovies = () => {
    return fetch(`${BASE_URL}/movies/`, {
        method: 'GET',
        credentials: 'include',
    })
        .then((response => { return _checkResponse(response) }))
}

export const saveMovies = (country,
    director,
    duration,
    year,
    description,
    image,
    trailer,
    nameRU,
    nameEN,
    thumbnail,
    movieId) => {
    return fetch(`${BASE_URL}/movies/`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            country,
            director,
            duration,
            year,
            description,
            image,
            trailer,
            nameRU,
            nameEN,
            thumbnail,
            movieId,
        })
    })
    .then((response => { return _checkResponse(response) }));
}

export const deleteMovies = (id) => {
    return fetch(`${BASE_URL}/movies/${id}`, {
        method: 'DELETE',
        credentials: 'include'
    })
        .then((response) => {
            return _checkResponse(response)
        });
}

;