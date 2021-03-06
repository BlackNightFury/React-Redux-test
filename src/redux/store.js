import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers'

export function configureStore(initialState = {}) {
  // Middleware and store enhancers
  const middlewares = []

  const enhancers = [applyMiddleware(...middlewares)]

  if (process.env.NODE_ENV === 'development') {
    // Enable DevTools only when rendering during development.
    if (window.devToolsExtension) {
      enhancers.push(window.devToolsExtension())
    }
  }

  const store = createStore(rootReducer, initialState, compose(...enhancers))
  return store
}
