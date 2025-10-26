import React, { useState, useEffect } from 'react';

export const useOutsideClick = (
  refElement: React.RefObject<HTMLElement>,
  initialState: boolean,
) => {
  const [isActive, setIsActive] = useState(initialState);

  useEffect(() => {
    const onClick = (event: MouseEvent): void => {
      event.preventDefault();

      if (
        refElement.current &&
        !refElement.current.contains(event.target as Node)
      ) {
        setIsActive(!isActive);
      }
    };

    if (isActive) {
      document.addEventListener('click', onClick, true);
    }

    return () => {
      document.removeEventListener('click', onClick, true);
    };
  }, [isActive, refElement]);

  return [isActive, setIsActive] as const;
};
