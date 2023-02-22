export const selectContacts = state => {
  console.log(state.contacts.items);
  return state.contacts.items;
};
