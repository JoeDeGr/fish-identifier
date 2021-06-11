import { combineReducers } from 'redux';
import alert from './alertReducer'
import users from './usersReducer'
import genuses from './genusReducer'
import species from './speciesReducer'
// import authentication from './authenticationReducer'

export default combineReducers({
    users: users,
    genuses: genuses,
    species: species,
    // auth: users,
    alert: alert
});