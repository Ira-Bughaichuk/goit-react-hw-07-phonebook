import { createSlice } from '@reduxjs/toolkit';
import {
  addContactsThunk,
  getContactsThunk,
  deleteContactsThunk,
} from './contacts-thunk';
export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
    filter: '',
  },
  reducers: {
    filterContactsAction(state, { payload }) {
      state.contacts.filter = payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.pending, state => {
        state.contacts.isLoading = true;
      })
      .addCase(getContactsThunk.fulfilled, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.items = payload;
      })
      .addCase(getContactsThunk.rejected, state => {
        state.contacts.isLoading = false;
      })
      //addContactsThunk
      .addCase(addContactsThunk.pending, state => {
        state.contacts.isLoading = true;
      })
      .addCase(addContactsThunk.fulfilled, (state, { payload }) => {
        console.log(state);
        state.contacts.isLoading = false;
        state.contacts.items.push(payload);
      })
      .addCase(addContactsThunk.rejected, state => {
        state.contacts.isLoading = false;
      })
      //deleteContactsThunk
      .addCase(deleteContactsThunk.pending, state => {
        state.contacts.isLoading = true;
      })
      .addCase(deleteContactsThunk.fulfilled, (state, { payload }) => {
        state.contacts.isLoading = false;
        const indexElem = state.contacts.items.findIndex(
          item => item.id === payload
        );
        state.contacts.items.splice(indexElem, 1);
      })
      .addCase(deleteContactsThunk.rejected, state => {
        state.contacts.isLoading = false;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { filterContactsAction } = contactsSlice.reducer;
