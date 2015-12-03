import { combineReducers } from 'redux'
import counter from './counter'
import users from './users'

export default combineReducers({
  counter,
  users
})
