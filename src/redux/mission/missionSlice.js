import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  missions: [],
  isLoading: false,
  Error: '',
};

export const fetchMission = createAsyncThunk('missions/fetchMission', async () => {
  try {
    const response = await fetch('https://api.spacexdata.com/v3/missions');
    return response.json();
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
        state.isLoading = false;
        const missions = action.payload.map((mission) => {
          const { mission_id: id, mission_name: name, description } = mission;
          return { id, name, description };
        });
        state.missions = missions;
      })
      .addCase(fetchMission.rejected, (state) => {
        state.Error = 'something went wrong';
      });
  },
});

export const { joinMission, cancelMission } = missionSlice.actions;
export default missionSlice.reducer;
