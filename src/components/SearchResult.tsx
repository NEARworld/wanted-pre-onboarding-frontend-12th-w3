import { FC } from 'react';

import styled from 'styled-components';

import { useRecent } from 'hooks/useRecent';

import { SearchRecommend } from './SearchRecommend';

type Props = {
  isInputVisible: boolean;
};

export const SearchResult: FC<Props> = ({ isInputVisible }) => {
  const { hasRecentItems } = useRecent();

  if (isInputVisible)
    return (
      <StyledContainer>
        <StyledRecent>
          <StyledRecentTitle>최근 검색어</StyledRecentTitle>
          <StyledRecentGuide>{hasRecentItems()}</StyledRecentGuide>
        </StyledRecent>
        <StyledHr />
        <SearchRecommend />
      </StyledContainer>
    );
  else return <></>;
};

const StyledContainer = styled.div`
  box-sizing: border-box;
  max-width: 100%;
  width: 100%;
  margin-top: 10px;
  background-color: white;
  border-radius: 25px;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.3);
`;

const StyledRecent = styled.div`
  padding: 20px;
`;
const StyledRecentTitle = styled.p`
  color: gray;
  margin: 0;
  font-size: small;
`;
const StyledRecentGuide = styled.p`
  color: darkgray;
  margin-top: 10px;
  margin-bottom: 0;
`;
const StyledHr = styled.hr`
  border-top: 1px solid lightgray;
  margin: 0;
`;
