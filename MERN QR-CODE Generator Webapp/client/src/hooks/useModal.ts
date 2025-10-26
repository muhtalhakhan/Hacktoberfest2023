import { useState } from 'react';

export const useModal = (initialVisible = false, duration = 400) => {
  const [isVisible, setIsVisible] = useState(initialVisible);
  const [transition, setTransition] = useState(false);

  const toggleVisible = () => {
    if (!isVisible) {
      setIsVisible(true);
    } else {
      setTransition(true);

      setTimeout(() => {
        setIsVisible(false);
        setTransition(false);
      }, duration);
    }
  };

  return { isVisible, toggleVisible, transition };
};
