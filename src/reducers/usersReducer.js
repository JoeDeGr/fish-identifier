let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : { loggedIn: false };

export default function users ( state = initialState, action ) {
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
            return {state}

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
        case 'GETALL_REQUEST':
            return{
                loggingIn: true,
                user: user
            }
        case 'GETALL_SUCCESS':
            return{
                loggedIn: true,
                user: action.user
            }
        case 'GETALL_FAILURE':
            return{}
        case 'ADD_SPECIES_TO_USER_REQUEST':
            const species = state.user.user_species.concat(action.species)
            debugger
            return {
                ...state,
                user: {
                    ...state.user,
                    user_species: species
                }
            }
        case 'ADD_SPECIES_TO_USER_SUCCESS':
            console.log(action.species_id)
            return state
        case 'ADD_SPECIES_TO_USER_FAILURE':
            return state
        case 'ADD_GENUS_TO_USER_REQUEST':
            console.log(action.genus_id)
            return state
        case 'ADD_GENUS_TO_USER_SUCCESS':
            console.log(action.genus_id)
            return state
        case 'ADD_GENUS_TO_USER_FAILURE':

            return state
        default:
            return state
    }
}