import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
// import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import {
  watchAddAction,
  watchDecrementAction,
  watchIncrementAction,
} from './counters/saga/counterActions'
import rootReducer from './rootReducer'

const saga = createSagaMiddleware()

const middleware = [saga]

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
)

saga.run(watchIncrementAction)
saga.run(watchDecrementAction)
saga.run(watchAddAction)

export default store
