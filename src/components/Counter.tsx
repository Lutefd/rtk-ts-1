import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
} from '../store/services/Counter/counterSlice';
import { useState } from 'react';
const Counter = () => {
  interface RootState {
    counter: {
      count: number;
    };
  }

  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);

  const handleAmount = (e: string) => {
    setAmount(parseInt(e));
  };

  const resetEverything = () => {
    dispatch(reset());
    setAmount(0);
  };

  return (
    <section className="card">
      <h1>{count}</h1>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={resetEverything}>Resetar</button>
      </div>
      <div>
        <label htmlFor="amount">Valor a ser adicionado</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => handleAmount(e.target.value)}
        />
        <button onClick={() => dispatch(incrementByAmount(amount))}>
          Adicionar valor
        </button>
      </div>
    </section>
  );
};

export default Counter;
