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

    return fetch('${apiUrl}'/users)
}

function login ()