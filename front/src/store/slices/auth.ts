import {createSlice} from '@reduxjs/toolkit';

const INITIAL_STATE = {
  data: {},
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: INITIAL_STATE,
  reducers: {
    setUserData: (state, action) => {
      state.data = action.payload.data;
    },
    deleteUserData: state => {
      state.data = INITIAL_STATE.data;
    },
  },
});

export const {setUserData, deleteUserData} = authSlice.actions;

export const authReducer = authSlice.reducer;
