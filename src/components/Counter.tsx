import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  decrement,
  reset,
} from '../store/services/Counter/counterSlice';
const Counter = () => {
  interface RootState {
    counter: {
      count: number;
    };
  }

  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <section className="card">
      <h1>{count}</h1>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </section>
  );
};

export default Counter;
