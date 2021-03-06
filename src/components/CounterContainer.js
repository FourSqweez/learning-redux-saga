import { useDispatch, useSelector } from 'react-redux'
import {
  ADD_REQ,
  INCREMENT_ASYNC_REQ,
  INCREMENT_REQ,
} from '../redux/counters/counterTypes'
import { DECREMENT_REQ } from './../redux/counters/counterTypes'

export default function CounterContainer() {
  const dispatch = useDispatch()
  const action = (type, payload) => dispatch({ type, payload })
  const counter = useSelector(({ counter }) => counter)

  return (
    <>
      <button onClick={() => action(INCREMENT_ASYNC_REQ)}>
        Increment after 1 second
      </button>
      <button onClick={() => action(INCREMENT_REQ)}>Increment</button>
      <button onClick={() => action(DECREMENT_REQ)}>Decrement</button>
      <button onClick={() => action(ADD_REQ, 10)}>Add</button>
      <hr />
      <div>Clicked: {counter.count}</div>
    </>
  )
}
