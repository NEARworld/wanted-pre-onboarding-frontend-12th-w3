import { ReactComponent as ZoomIcon } from 'assets/zoom.svg';
import styled from 'styled-components';

export const SearchBar = () => {
  return (
    <StyledSearchBar>
      <StyledPlaceholder>
        <ZoomIcon width={20} height={20} />
        <span>질환명을 입력해주세요.</span>
      </StyledPlaceholder>
    </StyledSearchBar>
  );
};

const StyledSearchBar = styled.div`
  max-width: 490px;
  padding: 20px 10px 20px 24px;
  border-radius: 42px;
  border: 2px solid white;
  background-color: white;
`;

const StyledPlaceholder = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  color: #a7afb7;
  font-size: 1.125rem;
  cursor: text;
`;
