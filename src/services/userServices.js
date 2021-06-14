import { authHeader } from '../helpers/auth-header'
import { apiURL } from '../helpers/apiURL'

export const userService = {
    createUser,
    login,
    update,
    logout,
    getAll,
    storeToken,
    storeUser
};

function createUser(user) {
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    "Access-Control-Allow-Origin": "*",
                },
        body: JSON.stringify({user})
    };

    return fetch(apiURL + '/users', options)
        .then(resp => handleResponse(resp))
        .then(data => storeUser(data))
}

function update(user) {
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({user})
    };

    return fetch(apiURL + '/users', options)
        .then(handleResponse())
        .then(storeUser(user))
}

function login (user) {
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({user})
    };

    return fetch(apiURL + '/login', options)
        .then(resp => handleResponse(resp))
        .then(data => storeUser(data));
}

function logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('token')
}

function getAll () {
    const options = {
        method: 'GET',
        headers: authHeader()
    }

    return fetch( '$(apiURL}/auto_login', options )
        .then(response => handleResponse(response))
        .then(data => console.log(data));
}

function handleResponse(response) {
    
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            const error = (data && data.message) || response.statusText;
            console.log(error)
            if (response.status === 401) {
                //logout if response 401
                logout();
            }
            return Promise.reject(error);
        }
        return data;
    })
}

function storeUser(data) {
    localStorage.setItem('user', JSON.stringify(data.user));
    storeToken(data.user)
    console.log(data.user)
    return data.user;
}

function storeToken(user) {
    let token = localStorage.setItem('token', JSON.stringify(user.jwt));
    return token;
}