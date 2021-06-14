// import { apiURL } from '../helpers/apiURL'

const apiURL = 'http://localhost:3000' 

export const appServices = {
    loadGenus,
    loadSpecies
};

function loadGenus() {
    const options = {
        method: 'GET',
        headers: { 'content-Type' : 'application/json' },
    }

    return fetch (apiURL + '/genus', options )
        .then(resp => resp.json())
        .then(data => {
            console.log(data)})
}

function loadSpecies() {
    const options = {
        method: 'GET',
        headers: { 'content-Type' : 'application/json' },
    }
    
    return fetch ( apiURL + '/species', options )
        .then(resp => resp.json())
        .then( data => {
            return data.species
        })
}