import api from '../api/contacts';
import { contactActions } from './contact-slice';

export const getContactsList = () => {
  return async (dispatch) => {
    const fetchContacts = async () => {
      try {
        const response = await api.get('/users');
        const contactsList = response.data.data ?? [];
        // console.log('contactsList', contactsList);
        return contactsList;
      } catch (e) {
        console.error(e.message);
      }
    };
    try {
      const contacts = await fetchContacts();
      dispatch(
        contactActions.getContacts({
          users: contacts || [],
          loading: false,
          error: null
        })
      );
    } catch (error) {}
  };
};
