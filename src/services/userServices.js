// import config from 'config';
import authHeader from '../helpers'

const apiURL = 'localhost:3000' 

export const userService = {
    createUser,
    login,
    update,
    logout,
    getAll,
    
};

function createUser(user) {
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({user})
    };

    return fetch('${apiURL}/users', options)
        .then(handleResponse)
        .then(storeUser(user))
}

function update(user) {
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({user})
    };

    return fetch('${apiURL}/users', options)
        .then(handleResponse)
        .then(storeUser(user))
}

function login (userData) {

    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({userData})
    };

    return fetch('${apiURL}/login', options)
        .then(handleResponse)
        .then(storeUser(user));
}

function logout() {
    localStorage.removeItem('user');
}

function getAll () {
    const options = {
        method: 'GET',
        headers: authHeader()
    }

    return fetch('$(apiURL}/auto_login', options).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            const error = (data && data.medage) || response.statusText;

            if (response.status === 401) {
                //logout if response 401
                logout();
            }
            return Promise.reject(error);
        }

        return data;
    })
}

function storeUser(user) {
    localStorage.setItem('user', JSON.stringify(user));
    return user;
}

// function storeToken() {
//     localStorage.setItem('token', JSON.stringify(user.jwt));
//     return token;
// }