import _ from 'lodash';
import { ContactsAction, ContactsActionTypes } from '../actions/contactActions';
import { Reducer } from 'redux';

export interface Contact {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  department?: string;
  contribution?: string;
  gender?: string;
  avatar?: string;
}

export interface Contacts {
  [id: number]: Contact;
}

export interface ContactsState {
  users: Contacts;
  loading: boolean;
  error: String | null;
}

const initialState = {
  users: {},
  loading: false,
  error: null
};

export const contactsReducer: Reducer<ContactsState, ContactsAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ContactsActionTypes.FETCH_CONTACTS:
    case ContactsActionTypes.EDIT_CONTACT:
      return { ...state, loading: true };
    case ContactsActionTypes.FETCH_CONTACTS_FAIL:
      return { ...state, loading: false, error: 'Failed to fetch contacts' };
    case ContactsActionTypes.FETCH_CONTACTS_SUCCESS:
      return {
        ...state,
        users: { ...state.users, ..._.mapKeys(action.payload, 'id') },
        loading: false
      };

    default:
      return state;
  }
};
