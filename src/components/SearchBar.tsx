import { useEffect, useRef, useState } from 'react';

import { ReactComponent as ZoomIcon } from 'assets/zoom.svg';
import styled from 'styled-components';

export const SearchBar = () => {
  const [isInputVisible, setIsInputVisible] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const input = inputRef.current;
    if (input && isInputVisible) input.focus();
  }, [isInputVisible]);

  return (
    <StyledSearchBar>
      <StyledInputBox>
        <StyledPlaceholder
          isInputVisible={isInputVisible}
          onClick={() => setIsInputVisible(!isInputVisible)}
        >
          <ZoomIcon width={20} height={20} />
          <span>질환명을 입력해주세요.</span>
        </StyledPlaceholder>
        <StyledInput ref={inputRef} type='text' width='100%' />
      </StyledInputBox>
      <StyledButton>
        <ZoomIcon width={20} height={20} fill='white' />
      </StyledButton>
    </StyledSearchBar>
  );
};

const StyledSearchBar = styled.div`
  max-width: 490px;
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 42px;
  border: 2px solid white;
  background-color: white;
`;

const StyledInputBox = styled.div`
  flex: 2;
  padding: 20px 10px 20px 24px;
`;

const StyledPlaceholder = styled.div<{ isInputVisible: boolean }>`
  position: absolute;
  display: ${props => (props.isInputVisible ? 'none' : 'flex')};
  gap: 12px;
  align-items: center;
  color: #a7afb7;
  font-size: 1.125rem;
  cursor: text;
`;

const StyledInput = styled.input`
  border: none;
  padding-right: 20px;
`;

const StyledButton = styled.button`
  border-radius: 100%;
  width: 48px;
  height: 48px;
  border: none;
  cursor: pointer;
  background-color: #007be9;
  display: grid;
  place-items: center;
  margin-right: 10px;
`;
