import React from 'react';
import css from './Filter.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from '../../redux/filterSelector';
import { filterContactsAction } from 'redux/contacts-slice';

const Filter = () => {
  const filterValue = useSelector(selectFilter);
  const dispatch = useDispatch();
  return (
    <div className={css.filter}>
      <label className={css.filter__label}>
        Find contacts by name
        <input
          className={css.filter__input}
          name="filter"
          type="text"
          value={filterValue}
          onChange={e => dispatch(filterContactsAction(e.target.value))}
          placeholder="Filter contacts"
        />
      </label>
    </div>
  );
};
export default Filter;
