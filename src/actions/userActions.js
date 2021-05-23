import { userService } from '../services';
import { alertActions } from './alertActions'
import { history } from '../helpers'

export const userActions = {
    createUser,
    login,
    update,
    logout,
    getAll,
};

function login (userData) {
    let username = userdata.username
    return dispatch => {
        dispatch({type: 'LOGIN_REQUEST', username});

        userService.login(userData)
            .then(
                user => {
                    dispatch({type: 'LOGIN_SUCCESS', user});
                    history.push('/');
                },
                error => {
                    dispatch({type: 'LOGIN_FAILURE', error})
                    dispatch(alertActions.error(error))
                }
            )
    }
}

function logout() {
    userService.logout();
    return {type: 'LOGOUT'}
}

function getAll() {
    return dispatch => {
        dispatch({ type: 'GETALL_REQUEST'});

        userService.getAll()
            .then(
                users => dispatch({ type: 'GETALL_SUCCESS', users}),
                error => {
                    dispatch({ type: 'GETALL_FAILURE', error})
                    dispatch( alertActions.error(error))
                }
            )
    }
}