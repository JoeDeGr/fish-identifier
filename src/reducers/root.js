import { combineReducers } from 'redux';
import alert from './alertReducer'
import users from './usersReducer'
import genus from './genusReducer'
import species from './speciesReducer'
import authentication from './authenticationReducer'

export default combineReducers({
    users,
    genus,
    species,
    authentication,
    alert
});