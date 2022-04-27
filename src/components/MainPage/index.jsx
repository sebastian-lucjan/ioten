import { useState } from 'react';
import MainPageContext from 'src/context/mainPageContext';
import Grid from 'src/components/Grid';
import styled from 'styled-components';
import Waves from 'src/assets/images/waves-net.svg';
import MainViewsNavigation from './MainViewsNavigation';
import MainViewsInfo from './MainViewsInfo';
import Wrapper from './MainPage.styles';
import AnimationBusiness from './AnimationBusiness';
import AnimationDesign from './AnimationDesign';
import AnimationData from './AnimationData';
import MainSectionWrapper from '../MainSectionWrapper/MainSectionWrapper.styles';

const WavesWrapper = styled.div`
  svg {
    position: absolute;
    bottom: -4%;
    width: 100%;
    //transform: scale(0.82);
    //left: -12%;
    z-index: 2;
  }
`;

const MainPage = () => {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <MainSectionWrapper background="gray">
      <MainPageContext.Provider value={{ pageIndex: currentPage, setCurrentPage }}>
        <Wrapper currentPage={currentPage}>
          {currentPage === 0 && <AnimationBusiness />}
          {currentPage === 1 && <AnimationDesign />}
          {currentPage === 2 && <AnimationData />}
          <MainViewsInfo currentPage={currentPage} />
        </Wrapper>

        <MainViewsNavigation />

        {currentPage === 1 && (
          <WavesWrapper>
            <Waves />
          </WavesWrapper>
        )}

        <Grid currentPage={currentPage} />
      </MainPageContext.Provider>
    </MainSectionWrapper>
  );
};

export default MainPage;
