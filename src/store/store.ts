import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './services/Counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
