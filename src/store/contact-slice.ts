import { createSlice } from '@reduxjs/toolkit';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    users: [],
    loading: false,
    error: null
  },
  reducers: {
    getContacts(state, action) {
      state.users = action.payload.users;
    }
  }
});

export const contactActions = contactSlice.actions;

export default contactSlice;
