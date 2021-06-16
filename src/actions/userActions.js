import { userService } from '../services/userServices';
import { alertActions } from './alertActions';
import { history } from '../helpers/history'

export const userActions = {
    createUser,
    login,
    updateUser,
    logout,
    getAll,
    addSpeciesToUser,
    addGenusToUser,
    removeSpecies,
    removeGenus
};

function login (user) {
    let username = user.username
    return dispatch => {
        dispatch({type: 'LOGIN_REQUEST', username});
        userService.login(user)
            .then(
                user => {
                    dispatch({type: 'LOGIN_SUCCESS', user});
                    history.push('/user');
                },
                error => {
                    dispatch({type: 'LOGIN_FAILURE', error});
                    dispatch(alertActions.error(error));
                }
            )
    }
}

function logout() {
    
    return dispatch => {
        dispatch({type: 'LOGOUT'});
        history.push('/');
        userService.logout();
        
    }
}

function getAll() {

    return dispatch => {
        dispatch({ type: 'GETALL_REQUEST'});
        userService.getAll()
            .then(
                user => dispatch({ type: 'GETALL_SUCCESS', user}),
                error => {
                    dispatch({ type: 'GETALL_FAILURE', error});
                    dispatch( alertActions.error(error));
                }
            );
    }
}

function updateUser(user) {
    debugger
    return dispatch => {
        dispatch({type: 'UPDATE_USER_REQUEST'});
        userService.updateUser(user)
            .then(
                user => {
                    dispatch({ type: 'UPDATE_USER_SUCCESS', user});
                    history.push('/');
                },
                error => {
                    dispatch({ type: 'UPDATE_USER_FAILURE', error});
                    dispatch( alertActions.error(error));
                }
            )
    }
}

function createUser (user) {
    let username = user.username

    return dispatch => {
        dispatch({type: 'CREATE_USER_REQUEST', username});
        userService.createUser(user)
            .then(
                user => {
                    dispatch({type: 'CREATE_USER_SUCCESS', user});
                    history.push('/');
                },
                error => {
                    dispatch({type: 'CREATE_USER_FAILURE', error});
                    dispatch(alertActions.error(error));
                }
            )
    }
}

function addSpeciesToUser( species ){

    return dispatch => {
        dispatch({type: 'ADD_SPECIES_TO_USER_REQUEST', species })
        userService.addSpeciesToUser(species)
        .then(
            user => {
                dispatch({type: 'ADD_SPECIES_TO_USER_SUCCESS', user});
                history.push('/species');
            },
            error => {
                dispatch({type: 'ADD_SPECIES_TO_USER_FAILURE', error});
                dispatch(alertActions.error(error));
            }
        )
    }

}
function addGenusToUser( genus ){
    return dispatch => {
        dispatch({type: 'ADD_GENUS_TO_USER_REQUEST', genus })
        userService.addGenusToUser(genus)
        .then(
            user => {
                dispatch({type: 'ADD_GENUS_TO_USER_SUCCESS', user});
                history.push('/genus');
            },
            error => {
                dispatch({type: 'ADD_GENUS_TO_USER_FAILURE', error});
                dispatch(alertActions.error(error));
            }
        )
    }

}

function removeSpecies(species){

}

function removeGenus(genus){
    return dispatch => {
        dispatch({type: 'REMOVE_GENUS_TO_USER_REQUEST', genus })
        userService.remove(genus)
        .then(
            user => {
                dispatch({type: 'REMOVE_GENUS_TO_USER_SUCCESS', user});
                history.push('/genus');
            },
            error => {
                dispatch({type: 'REMOVE_GENUS_TO_USER_FAILURE', error});
                dispatch(alertActions.error(error));
            }
        )

}
