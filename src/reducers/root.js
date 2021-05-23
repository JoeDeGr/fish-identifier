import { combineReducers } from 'redux';
import users from './usersReducer'
import genus from './genusReducer'
import species from './speciesReducer'

export default combineReducers({
    users,
    genus,
    species
});