import { combineReducers } from 'redux';
import alert from './alertReducer'
import users from './usersReducer'
import genera from './genusReducer'
import species from './speciesReducer'

export default combineReducers({
    users: users,
    genera: genera,
    species: species,
    alert: alert
});