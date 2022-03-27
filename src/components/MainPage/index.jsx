import MainSectionWrapper from 'src/components/MainSectionWrapper/MainSectionWrapper.styles';
import theme from 'src/assets/styles/theme';
import styled from 'styled-components';
import { useState } from 'react';
import MainPageContext from 'src/context/mainPageContext';
import MainViewsNavigation from './MainViewsNavigation';
import MainViewsInfo from './MainViewsinfo';
import Wrapper from './MainPage.styles';

const AnimationPlaceholder = styled.div`
  position: absolute;
  top: 25vh;
  left: 0;
  width: 100%;
  height: 40vh;
  background-color: #ff5659;
`;

const MainPage = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const {
    color: { lightGray },
    gradient: { lightGray: LightGrayGradient },
  } = theme;

  return (
    <MainSectionWrapper colors={{ background: LightGrayGradient, lines: lightGray }}>
      <MainPageContext.Provider value={{ pageIndex: currentPage, setCurrentPage }}>
        <Wrapper>
          <AnimationPlaceholder />
          <MainViewsInfo />
          <MainViewsNavigation />
        </Wrapper>
      </MainPageContext.Provider>
    </MainSectionWrapper>
  );
};

export default MainPage;
