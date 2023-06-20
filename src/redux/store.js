import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './mission/missionSlice';

const store = configureStore({
  reducers: {
    mission: missionReducer,
  },
});

export default store;
