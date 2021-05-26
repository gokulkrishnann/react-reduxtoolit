import { combineReducers, Action } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { contactsReducer, ContactsState } from './contactsReducer';

export type Error = {
  name: string;
  message: string;
};

export type Store = {
  contactsReducer: ContactsState;
};

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  Store,
  unknown,
  Action<string>
>;

export type AppDispatch = ThunkDispatch<Store, unknown, Action<string>>;

export default combineReducers({ contactsReducer });
