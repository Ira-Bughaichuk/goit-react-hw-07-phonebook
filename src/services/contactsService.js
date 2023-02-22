import axios from 'axios';

export const contactsService = axios.create({
  baseURL: 'https://63f4dcfb55677ef68bc59d65.mockapi.io/contacts',
});

export const fetchContacts = async () => {
  const { data } = await contactsService.get('');
  return data;
};
export const addContact = async contact => {
  const { data } = await contactsService.post(`/`, contact);
  return data;
};
export const deleteContact = async id => {
  const { data } = await contactsService.delete(`/${id}`);
  return data;
};
