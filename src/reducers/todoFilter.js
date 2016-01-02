import { handleActions } from 'redux-actions'

const initialState = 'all'

export default handleActions({
  'set filter' (state, action) {
    return action.payload
  }
}, initialState)
