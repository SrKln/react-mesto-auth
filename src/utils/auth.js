export const BASE_URL_AUTH = 'https://auth.nomoreparties.co';

const checkStatus = (res) => {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
};

export const register = (email, password) => {
    return fetch(`${BASE_URL_AUTH}/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    }).then(res => checkStatus(res))
};

export const authorize = (email, password) => {
    return fetch(`${BASE_URL_AUTH}/signin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    }).then(res => checkStatus(res))
};

export const checkToken = (token) => {
    return fetch(`${BASE_URL_AUTH}/users/me`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }).then(res => checkStatus(res))
};