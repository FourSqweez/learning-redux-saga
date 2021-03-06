import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './counters/saga'
import rootReducer from './rootReducer'

const saga = createSagaMiddleware()

const middleware = [saga]

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
)

saga.run(rootSaga)

export default store
