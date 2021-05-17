import { combineReducers } from 'redux';
import users from './users'
import genus from './genus'
import species from './species'

export default combineReducers({
    users,
    genus,
    species
});