import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './rockets/rocketSlice';
import missionReducer from './mission/missionSlice';

const store = configureStore({
  reducer: {
    mission: missionReducer,
    rockets: rocketsReducer,
  },
});

export default store;
