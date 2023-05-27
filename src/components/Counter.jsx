import { useSelector, useDispatch } from 'react-redux'
import { decrement, decrementByAmout, increment, incrementByAmount } from '../slices/counter/counterSlice'

function ra() {
  const element = document.querySelector('.counter');
  element.classList.add('animate__animated', 'animate__pulse')
  element.addEventListener('animationend', () => {
    // do something
    element.classList.remove('animate__animated', 'animate__pulse')
  })
}

export function Counter() {
  const { counter } = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <span className='counter-title'>
        ~-~-~-~  Counter ~-~-~-~
      </span>
      <span name='value' className='counter'>
        {counter}
      </span>
      <div>
        <button
          aria-label='Increment'
          onClick={() => { dispatch(increment()); ra() }}
        >
          Increment
        </button>
        <button
          aria-label='Decrement'
          onClick={() => { dispatch(decrement()); ra() }}
        >
          Decrement
        </button>
      </div>
      <div>
        <button
          onClick={() => { dispatch(incrementByAmount(2)); ra() }}
        >
          +2
        </button>
        <button
          onClick={() => { dispatch(incrementByAmount(3)); ra() }}
        >
          +3
        </button>
        <button
          onClick={() => { dispatch(decrementByAmout(2)); ra() }}
        >
          -2
        </button>
        <button
          onClick={() => { dispatch(decrementByAmout(3)); ra() }}
        >
          -3
        </button>
      </div>
    </div>
  )
}
