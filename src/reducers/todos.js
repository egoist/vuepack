import { handleActions } from 'redux-actions'

const initialState = [
  {
    text: 'Rule the web',
    done: true,
    date: new Date('2015-10-11'),
    id: Math.random()
  },
  {
    text: 'Conquer the world',
    done: false,
    date: new Date('2015-11-11'),
    id: Math.random()
  },
  {
    text: 'Marry my love',
    done: false,
    date: new Date('2015-12-11'),
    id: Math.random()
  }
]

export default handleActions({
  'add todo' (state, action) {
    return [{
      text: action.payload,
      done: false,
      date: new Date(),
      id: Math.random()
    }, ...state,]
  },
  'toggle todo' (state, action) {
    return state.map(todo => {
      if (todo.id === action.payload) {
        todo.done = !todo.done
      }
      return todo
    })
  }
}, initialState)
