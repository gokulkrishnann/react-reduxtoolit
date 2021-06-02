import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../api/contacts';
export const fetchContacts: any = createAsyncThunk(
  'contacts/getContacts',
  async () => {
    const response = await api.get('/users');
    const contactsList = response.data.data;
    console.log('contactsList', contactsList);
    return contactsList;
  }
);
const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    users: [],
    loading: false,
    error: null
  },
  reducers: {
    editContact(state, action) {
      const { id, first_name, last_name, email } = action.payload;
      const existingUser = state.users.find((user) => user.id === id);
      if (existingUser) {
        existingUser.first_name = first_name;
        existingUser.last_name = last_name;
        existingUser.email = email;
      }
    }
  },
  extraReducers: {
    [fetchContacts.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchContacts.fulfilled]: (state, action) => {
      state.loading = false;
      state.users = [...state.users, ...action.payload];
    },
    [fetchContacts.rejected]: (state, action) => {
      state.loading = false;
    }
  }
});

export const { editContact } = contactSlice.actions;

export default contactSlice;
