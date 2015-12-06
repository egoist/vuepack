/* global __DEV__ */
import { applyMiddleware, createStore, compose } from 'redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk'

let finalCreateStore
let store
if (__DEV__) {
  const { devTools, persistState } = require('redux-devtools')
  finalCreateStore = compose(
    applyMiddleware(
      thunk
    ),
    devTools(),
    persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
  )(createStore)
  store = finalCreateStore(rootReducer)
} else {
  finalCreateStore = applyMiddleware(
    thunk
  )(createStore)
  store = finalCreateStore(rootReducer)
}

function configureStore () {
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }
  return store
}

export default configureStore()
