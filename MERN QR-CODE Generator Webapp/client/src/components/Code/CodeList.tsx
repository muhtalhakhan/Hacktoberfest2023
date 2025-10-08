import React from 'react';

import { CodeResponse } from '../../types/response/CodeResponse';

import { Card } from '../UI/Card/Card';

interface ICodeListProps {
  isLoading: boolean;
  codes?: CodeResponse[];
  isActivated: boolean;
}

export const CodeList = ({
  isLoading,
  codes,
  isActivated = false,
}: ICodeListProps) => {
  return (
    <div className="code__items">
      {codes?.map((code, index) => (
        <Card
          key={index}
          url={code.link}
          img={code.logo.src}
          shortLink={code.shortLink}
          name={code.name}
          patternColor={code.style.patternColor}
          bgColor={code.style.bgColor}
          count={code.transitions}
          isCountVisible={isActivated}
        />
      ))}

      {codes && codes?.length === 0 && !isLoading && (
        <p className="code__empty suptitle">Ничего не найдено</p>
      )}
    </div>
  );
};
