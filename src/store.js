import { applyMiddleware, createStore, compose } from 'redux'
import { devTools, persistState } from 'redux-devtools'
import rootReducer from './reducers'

const finalCreateStore = compose(
  //applyMiddleware(m1, m2, m3 ...),
  devTools(),
  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
)(createStore)

function configureStore () {
  const store = finalCreateStore(rootReducer)
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }
  return store
}

export default configureStore()
