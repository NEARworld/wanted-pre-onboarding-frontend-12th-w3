import React from 'react';

import styled from 'styled-components';

import './App.css';
import { SearchBar } from './components/SearchBar';

function App() {
  return (
    <StyledMain>
      <StyledSearchBarContainer>
        <StyledHeader>
          국내 모든 임상시험 검색하고 <br /> 온라인으로 참여하기
        </StyledHeader>
        <SearchBar />
      </StyledSearchBarContainer>
    </StyledMain>
  );
}

export default App;

const StyledMain = styled.main`
  min-height: 100vh;
  display: grid;
  place-items: center;
  background-color: #cae9ff;
`;

const StyledSearchBarContainer = styled.section`
  width: 500px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledHeader = styled.h2`
  text-align: center;
  font-size: 2.125rem;
  font-weight: 700;
  letter-spacing: -0.018em;
  line-height: 1.6;
`;
