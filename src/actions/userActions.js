import { userService } from '../services/userServices';
import { alertActions } from './alertActions';
import { history } from '../helpers/history'

export const userActions = {
    createUser,
    login,
    updateUser,
    logout,
    getAll
};

function login (user) {
    debugger
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
                user => dispatch({ type: 'LOGIN_SUCCESS', user}),
                error => {
                    dispatch({ type: 'LOGIN_FAILURE', error});
                    dispatch( alertActions.error(error));
                }
            );
    }
}

function updateUser(user) {
    return dispatch => {
        dispatch({type: 'UPDATE_USER_REQUEST'});
        userService.update(user)
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
