import React, { useState } from 'react';

import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useGetCodesQuery } from '../../store/code/codeApi';

import { Search } from '../UI/Search/Search';
import { Loader } from '../UI/Loader/Loader';
import { CodeList } from './CodeList';

import './Code.scss';

export const Code = () => {
  const { user } = useTypedSelector((state) => state.auth);
  const { data: codes, isLoading } = useGetCodesQuery(user.id);
  const [search, setSearch] = useState(codes);

  return (
    <div className="code">
      <Search
        className="code__search"
        searchedValue="link"
        defaultValues={codes}
        setSearch={setSearch}
      />

      {!isLoading ? (
        <CodeList
          codes={search}
          isLoading={isLoading}
          isActivated={user.isActivated}
        />
      ) : (
        <Loader className="code__loader" />
      )}
    </div>
  );
};
