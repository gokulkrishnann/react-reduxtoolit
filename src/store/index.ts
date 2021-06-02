import { configureStore } from '@reduxjs/toolkit';

import contactSlice from './contact-slice';

const store = configureStore({
  reducer: { contact: contactSlice.reducer }
});

export default store;
