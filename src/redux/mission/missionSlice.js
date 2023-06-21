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
  reducers: {
    joinMission: (state, action) => {
      state.missions = state.missions.map((mission) => {
        if (mission.id === action.payload) {
          return ({ ...mission, reserved: true });
        }
        return mission;
      });
    },
    cancelMission: (state, action) => {
      state.missions = state.missions.map((mission) => {
        if (mission.id === action.payload) {
          return ({ ...mission, reserved: false });
        }
        return mission;
      });
    },
  },
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

export const { joinMission, cancelMission } = missionSlice.actions;
export default missionSlice.reducer;
