import {createSlice} from '@reduxjs/toolkit';

const INITIAL_STATE = {
  data: [],
  searchData: [],
};

export const stationSlice = createSlice({
  name: 'station',
  initialState: INITIAL_STATE,
  reducers: {
    setStationsData: (state, action) => {
      state.data = action.payload;
      state.searchData = action.payload;
    },
    resetStationsData: state => {
      state.data = INITIAL_STATE.data;
    },
    setSearchData: (state, action) => {
      state.searchData = action.payload;
    },
    resetSearchData: state => {
      state.searchData = state.data;
    },
  },
});

export const {
  setStationsData,
  resetStationsData,
  resetSearchData,
  setSearchData,
} = stationSlice.actions;

export const stationReducer = stationSlice.reducer;
