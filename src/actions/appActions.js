import { alertActions } from './alertActions';
import { appServices } from '../services/appServices'

export const appActions = {
    loadGenera,
    loadSpecies

};

function loadGenera(){
    return dispatch => {
        dispatch({type: 'LOAD_GENUS_REQUEST'});
        appServices.loadGenera()
        .then(
            genus => {
                dispatch({type: 'LOAD_GENUS_SUCCESS', genus});
            },
            error => {
                dispatch({type: 'LOAD_GENUS_FAILURE', error});
                dispatch(alertActions.error(error));
            }
        )
    }
};

function loadSpecies(){
    return dispatch => {
        dispatch({type: 'LOAD_SPECIES_REQUEST'});
        appServices.loadSpecies()
        .then(
            species => {
                dispatch({type: 'LOAD_SPECIES_SUCCESS', species});
            },
            error => {
                dispatch({type: 'LOAD_SPECIES_FAILURE', error});
                dispatch(alertActions.error(error));
            }
        )
    }
}