import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  rockets: [],
  isLoading: true,
};

export const getRockets = createAsyncThunk(
  'rockets/getRockets',
  async (name, thunkAPI) => {
    try {
      const resp = await fetch('https://api.spacexdata.com/v4/rockets');
      return resp.json();
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  },
);

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reserveRocket: (state, action) => {
      const id = action.payload;
      const newState = state.rockets.map((rocket) => {
        if (rocket.id !== id) return rocket;
        return { ...rocket, reserved: true };
      });
      state.rockets = newState;
    },
    cancelReserveRocket: (state, action) => {
      const id = action.payload;
      const newState = state.rockets.map((rocket) => {
        if (rocket.id !== id) return rocket;
        return { ...rocket, reserved: false };
      });
      state.rockets = newState;
    },
  },
  extraReducers: {
    [getRockets.pending]: (state) => {
      state.isLoading = true;
    },
    [getRockets.fulfilled]: (state, action) => {
      state.isLoading = false;
      const newRockets = [];
      const fetchedRockets = action.payload;
      fetchedRockets.forEach((rocket) => {
        newRockets.push({
          id: rocket.id,
          name: rocket.name,
          description: rocket.description,
          flickr_images: rocket.flickr_images[0],
        });
      });
      state.rockets = newRockets;
    },
    [getRockets.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});
export const { reserveRocket, cancelReserveRocket } = rocketsSlice.actions;

export default rocketsSlice.reducer;
