import { put } from 'redux-saga/effects'
import { ADD, DECREMENT, INCREMENT } from './../counterTypes'

export function* setIncrementAction() {
  yield put({ type: INCREMENT })
}
export function* setDecrementAction() {
  yield put({ type: DECREMENT })
}
export function* setAddAction({ payload }) {
  yield put({ type: ADD, payload })
}
