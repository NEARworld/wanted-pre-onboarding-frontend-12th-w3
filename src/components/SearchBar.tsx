import { ReactComponent as ZoomIcon } from 'assets/zoom.svg';
import styled from 'styled-components';

import { useInput } from 'hooks/useInput';

import { SearchResult } from './SearchResult';

const BUTTON_COLOR = '#007be9';

export const SearchBar = () => {
  const { inputBoxRef, isInputVisible, setIsInputVisible } = useInput();

  return (
    <>
      <StyledSearchBar $isInputVisible={isInputVisible}>
        <StyledInputBox
          ref={inputBoxRef}
          onClick={e => {
            e.stopPropagation();
            setIsInputVisible(true);
          }}
        >
          <StyledPlaceholder $isInputVisible={isInputVisible}>
            <ZoomIcon width={20} height={20} />
            <span>질환명을 입력해주세요.</span>
          </StyledPlaceholder>
          <StyledInput type='text' width='100%' />
        </StyledInputBox>
        <StyledButton>
          <ZoomIcon width={20} height={20} fill='white' />
        </StyledButton>
      </StyledSearchBar>
      <SearchResult isInputVisible={isInputVisible} />
    </>
  );
};

const StyledSearchBar = styled.div<{ $isInputVisible: boolean }>`
  max-width: 490px;
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 42px;
  border: ${props => (props.$isInputVisible ? `2px solid ${BUTTON_COLOR}` : '2px solid white')};
  background-color: white;
`;

const StyledInputBox = styled.div`
  flex: 2;
  padding: 20px 10px 20px 24px;
`;

const StyledPlaceholder = styled.div<{ $isInputVisible: boolean }>`
  position: absolute;
  display: ${props => (props.$isInputVisible ? 'none' : 'flex')};
  gap: 12px;
  align-items: center;
  color: #a7afb7;
  font-size: 1.125rem;
  cursor: text;
`;

const StyledInput = styled.input`
  border: none;
  outline: none;
  padding-right: 20px;
`;

const StyledButton = styled.button`
  border-radius: 100%;
  width: 48px;
  height: 48px;
  border: none;
  cursor: pointer;
  background-color: ${BUTTON_COLOR};
  display: grid;
  place-items: center;
  margin-right: 10px;
`;
