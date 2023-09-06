import styled from 'styled-components';

export const SearchRecommend = () => {
  return (
    <StyledContainer>
      <StyledTitle>추천 검색어로 검색해보세요</StyledTitle>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  padding: 20px;
`;

const StyledTitle = styled.p`
  color: gray;
  margin: 0;
`;
