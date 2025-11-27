import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  toggle: false
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggle: (state) => {
      state.toggle = !state.toggle;
    }
  }
});

export const { toggle } = modalSlice.actions;

export default modalSlice.reducer;
