import { useEffect, useRef, useState } from 'react';

export const useInput = () => {
  const [isInputVisible, setIsInputVisible] = useState(false);
  const inputBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const inputBox = inputBoxRef.current;
    if (inputBox && isInputVisible && inputBox.lastChild instanceof HTMLInputElement)
      inputBox.lastChild.focus();

    const handleOutsideClick = () => setIsInputVisible(false);

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isInputVisible]);

  return {
    inputBoxRef,
    isInputVisible,
    setIsInputVisible,
  };
};
