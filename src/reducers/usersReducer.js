let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? {loggedIn: true, user } : {loggedIn: false};

export default function users (state = initialState, action) {
    switch(action.type) {
        case 'CREATE_USER_REQUEST':
            return {
                loggingIn: true,
                user: action.user
            };
        case 'CREATE_USER_SUCCESS':
            return {
                loggedIn: true,
                user: action.user
            }
        case 'CREATE_USER_FAILURE':
            return {}
        case 'UPDATE_USER_REQUEST':
            console.log(state)
            return {
                loggingIn: true,
                user: action.user
            };
        case 'UPDATE_USER_SUCCESS':
            return {
                loggedIn: true,
                user: action.user
            }
        case 'UPDATE_USER_FAILURE':
            return {}
        case 'LOGIN_REQUEST':
            return {
                loggingIn: true,
                user: action.user
            };
        case 'LOGIN_SUCCESS':
            return {
                loggedIn: true,
                user: action.user
            };
        case 'LOGIN_FAILURE':
            return {};
        case 'LOGOUT':
            return {};
        default:
            return state
    }
}