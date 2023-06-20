import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  rockets: [],
  isLoading: true,
};

export const getRockets = createAsyncThunk(
  'books/getRockets',
  async (name, thunkAPI) => {
    try {
      const resp = await axios('https://api.spacexdata.com/v4/rockets');
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  },
);

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
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
          type: rocket.type,
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

export default rocketsSlice.reducer;
