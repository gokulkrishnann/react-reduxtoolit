import { contactsReducer } from '../contactsReducer';
import { ContactsActionTypes } from '../../actions/contactActions';

describe('contactsReducer initial actions', () => {
  const initialState = {
    users: {},
    loading: false,
    error: null
  };

  const actions: ContactsActionTypes[] = [
    ContactsActionTypes.FETCH_CONTACTS,
    ContactsActionTypes.EDIT_CONTACT
  ];
  const expected = {
    users: {},
    loading: true,
    error: null
  };

  test.each(actions)('should handle %s', (action) => {
    const usedAction: any = { type: action };
    const actual = contactsReducer(initialState, usedAction);
    expect(actual).toEqual(expected);
  });
});

describe('contactsReducer fail actions', () => {
  const initialState = {
    users: {},
    loading: true,
    error: null
  };

  const actions = [ContactsActionTypes.FETCH_CONTACTS_FAIL];

  const expected = {
    users: {},
    loading: false,
    error: 'Failed to fetch contacts'
  };

  test.each(actions)('should handle %s', (action) => {
    const usedAction: any = { type: action };
    const actual = contactsReducer(initialState, usedAction);
    expect(actual).toEqual(expected);
  });
});
describe('contactsReducer fetch contacts success actions', () => {
  const initialState = {
    users: {},
    loading: true,
    error: null
  };

  const expected = {
    users: {
      1: {
        id: 1,
        first_name: 'cristiano',
        last_name: 'ronaldo',
        department: 'football',
        email: 'cr7@football.com',
        contribution: '2909'
      },
      2: {
        id: 2,
        first_name: 'M',
        last_name: 'ronaldo',
        department: 'football',
        email: 'mr7@football.com',
        contribution: '190909'
      }
    },
    loading: false,
    error: null
  };

  const payload = {
    1: {
      id: 1,
      first_name: 'cristiano',
      last_name: 'ronaldo',
      department: 'football',
      email: 'cr7@football.com',
      contribution: '2909'
    },
    2: {
      id: 2,
      first_name: 'M',
      last_name: 'ronaldo',
      department: 'football',
      email: 'mr7@football.com',
      contribution: '190909'
    }
  };

  test('should handle fetch posts success', () => {
    const usedAction: any = {
      type: ContactsActionTypes.FETCH_CONTACTS_SUCCESS,
      payload: payload
    };
    const actual = contactsReducer(initialState, usedAction);
    expect(actual).toEqual(expected);
  });
});
