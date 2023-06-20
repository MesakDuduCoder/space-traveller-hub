import { createSlice } from 'react-redux';

const initialState = {
  missions: [],
  isLoading: false,
  Error: false,
};

const missionSlice = createSlice({
  name: 'mission',
  initialState,

});

export default missionSlice.reducer;
