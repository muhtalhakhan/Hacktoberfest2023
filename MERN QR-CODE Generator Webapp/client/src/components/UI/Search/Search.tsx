import React, { useEffect, useState } from 'react';

import { ICONS_COLOR_BLACK } from '../../../utils/constants/color.constant';

import { Icons } from '../Icon/Icon';
import { Input } from '../Input/Input';

import './Search.scss';

interface ISearchProps {
  defaultValues: any;
  setSearch: (value: any) => void;
  searchedValue?: string;
  className?: string;
  placeholder?: string;
}

export const Search = ({
  defaultValues = [],
  setSearch,
  searchedValue = 'name',
  className = '',
  placeholder = 'Поиск...',
}: ISearchProps) => {
  const [value, setValue] = useState('');

  const filterValue = (value: string) => {
    return (
      defaultValues.filter((element: any) => {
        return element[searchedValue]
          .toLowerCase()
          .includes(value.toLowerCase());
      }) || []
    );
  };

  const searchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;

    setValue(query);
    setSearch(filterValue(query));
  };

  useEffect(() => {
    setSearch(filterValue(value));
  }, [defaultValues]);

  return (
    <div className={`search ${className}`}>
      <Icons name="search" color={ICONS_COLOR_BLACK} className="search__icon" />
      <Input
        onChange={(event) => searchHandler(event)}
        value={value}
        type="text"
        className="input input_search search__input"
        placeholder={placeholder}
      />
    </div>
  );
};
