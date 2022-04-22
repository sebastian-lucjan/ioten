import MainSectionWrapper from 'src/components/MainSectionWrapper/MainSectionWrapper.styles';
import theme from 'src/assets/styles/theme';
import { useState } from 'react';
import MainPageContext from 'src/context/mainPageContext';
import Grid from 'src/components/Grid';
import MainViewsNavigation from './MainViewsNavigation';
import MainViewsInfo from './MainViewsInfo';
import Wrapper from './MainPage.styles';
import { AnimationWrapper } from './MainViewsInfo/MainViewInfo.styles';

const MainPage = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const {
    gradient: { lightGray: lightGrayGradient },
  } = theme;

  return (
    <MainSectionWrapper background={lightGrayGradient}>
      <MainPageContext.Provider value={{ pageIndex: currentPage, setCurrentPage }}>
        <Wrapper>
          <AnimationWrapper />
          <MainViewsInfo />
        </Wrapper>
        <MainViewsNavigation />
        <Grid />
      </MainPageContext.Provider>
    </MainSectionWrapper>
  );
};

export default MainPage;
