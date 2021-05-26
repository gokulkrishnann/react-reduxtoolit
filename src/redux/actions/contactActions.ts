import { Dispatch } from 'redux';
import { Contact, Contacts } from '../reducers/contactsReducer';
import api from '../../api/contacts';

export enum ContactsActionTypes {
  FETCH_CONTACTS = 'FETCH_CONTACTS',
  FETCH_CONTACTS_SUCCESS = 'FETCH_CONTACTS_SUCCESS',
  FETCH_CONTACTS_FAIL = 'FETCH_CONTACTS_FAIL',
  EDIT_CONTACT = 'EDIT_CONTACT',
  EDIT_CONTACT_SUCCESS = 'EDIT_CONTACT_SUCCESS',
  EDIT_CONTACT_FAIL = 'EDIT_CONTACT_FAIL'
}

// FETCH CONTACTS

export interface FetchContacts {
  type: ContactsActionTypes.FETCH_CONTACTS;
}

interface FetchContactsSuccess {
  type: ContactsActionTypes.FETCH_CONTACTS_SUCCESS;
  payload: Contacts;
}

interface FetchContactsFail {
  type: ContactsActionTypes.FETCH_CONTACTS_FAIL;
}

export const fetchContacts = () => async (dispatch) => {
  handleFetchContacts(dispatch);
  try {
    const response = await api.get('/users');
    const contactsList = response.data.data ?? [];
    handleFetchContactsSuccess(dispatch, contactsList);
    return contactsList;
  } catch (e) {
    handleFetchContactsFail(dispatch);
  }
};

export const handleFetchContacts = (dispatch: Dispatch<FetchContacts>) => {
  dispatch({ type: ContactsActionTypes.FETCH_CONTACTS });
};

export const handleFetchContactsSuccess = (
  dispatch: Dispatch<FetchContactsSuccess>,
  response: Contacts
) => {
  dispatch({
    type: ContactsActionTypes.FETCH_CONTACTS_SUCCESS,
    payload: response
  });
};

export const handleFetchContactsFail = (
  dispatch: Dispatch<FetchContactsFail>
) => {
  dispatch({
    type: ContactsActionTypes.FETCH_CONTACTS_FAIL
  });
};

// EDIT POST

interface EditContact {
  type: ContactsActionTypes.EDIT_CONTACT;
}

interface EditContactSuccess {
  type: ContactsActionTypes.EDIT_CONTACT_SUCCESS;
  payload: Contact;
}

interface EditContactFail {
  type: ContactsActionTypes.EDIT_CONTACT_FAIL;
}

export const editContact = (editedContact: Contact) => async (dispatch) => {
  handleEditContact(dispatch);
  try {
    const response = await api.patch(
      `/users/${editedContact.id}`,
      editedContact
    );
    handleEditContactSuccess(dispatch, response.data);
    return response.data;
  } catch (e) {
    handleEditContactFail(dispatch);
  }
};

const handleEditContact = (dispatch: Dispatch<EditContact>): void => {
  dispatch({ type: ContactsActionTypes.EDIT_CONTACT });
};

const handleEditContactSuccess = (
  dispatch: Dispatch<EditContactSuccess>,
  editedContact: Contact
) => {
  dispatch({
    type: ContactsActionTypes.EDIT_CONTACT_SUCCESS,
    payload: editedContact
  });
};

const handleEditContactFail = (dispatch: Dispatch<EditContactFail>) => {
  dispatch({ type: ContactsActionTypes.EDIT_CONTACT_FAIL });
};

export type ContactsAction =
  | FetchContacts
  | FetchContactsSuccess
  | FetchContactsFail
  | EditContact
  | EditContactSuccess
  | EditContactFail;
