import { useRef } from 'react';

const useInputUser = ( setInput ) => {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.value && setInput(inputRef.current.value);
  };

  return {
    inputRef,
    handleClick,
  };
};

export default useInputUser;
