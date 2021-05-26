import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxThunk, { ThunkMiddleware } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { contactsReducer, ContactsState } from '../reducers/contactsReducer';
import { ContactsAction } from '../actions/contactActions';

export interface RootState {
  readonly contacts: ContactsState;
}

const rootReducer = combineReducers<RootState>({
  contacts: contactsReducer
});

export type RootActions = ContactsAction;

export const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(reduxThunk as ThunkMiddleware<RootState, RootActions>)
  )
);
