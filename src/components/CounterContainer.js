import { useDispatch, useSelector } from 'react-redux'
import { onDecrement, onIncrement, onAdd, onIncrementAsync } from '../redux'

export default function CounterContainer() {
  const dispatch = useDispatch()
  const counter = useSelector(({ counter }) => counter.count)

  return (
    <>
      <button onClick={() => dispatch(onIncrementAsync())}>
        Increment after 1 second
      </button>
      <button onClick={() => dispatch(onIncrement())}>Increment</button>
      <button onClick={() => dispatch(onDecrement())}>Decrement</button>
      <button onClick={() => dispatch(onAdd(10))}>Add</button>
      <hr />
      <div>Clicked: {counter}</div>
    </>
  )
}
