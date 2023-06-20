import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './rockets/rocketSlice';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
  },
});

export default store;
