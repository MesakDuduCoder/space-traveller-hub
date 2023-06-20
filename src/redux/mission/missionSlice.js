import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  missions: [],
  isLoading: false,
  Error: '',
};

export const fetchMission = createAsyncThunk('missions/fetchMission', async () => {
  try {
    const response = await axios('https://api.spacexdata.com/v3/missions');
    const missionArr = response.data.map((mission) => ({
      id: mission.mission_id,
      name: mission.mission_name,
      description: mission.description,
    }));
    return missionArr;
  } catch (error) {
    return error;
  }
});

const missionSlice = createSlice({
  name: 'mission',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchMission.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchMission.fulfilled, (state, action) => {
        state.missions = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchMission.rejected, (state) => {
        state.Error = 'something went wrong';
      });
  },
});

export default missionSlice.reducer;
