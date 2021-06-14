import { apiURL } from '../helpers/apiURL'

export const appServices = {
    loadGenera,
    loadSpecies
};

function loadGenera() {
    const options = {
        method: 'GET',
        headers: { 'content-Type' : 'application/json' },
    }

    return fetch (apiURL + '/genus', options )
        .then(resp => resp.json())
        .then(data => {
            return data.genus 
        })
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