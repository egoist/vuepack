import { combineReducers } from 'redux'
import todos from './todos'
import todoFilter from './todoFilter'

export default combineReducers({
  todos,
  todoFilter
})
