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

function createUser(userData) {
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({userData})
    };

    return fetch('${apiURL}/users', options)
        .then(handleResponse)
        .then(storeUser(user))
}

function update(userData) {
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({userData})
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

    return fetch('${apiURL}/users/authenticate', options)
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

    return fetch('$(apiURL}/users', options).then(handleResponse);
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