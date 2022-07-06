import { useContext } from 'react';
import Grid from 'src/components/Grid';
import styled from 'styled-components';
import Waves from 'src/assets/images/waves-net.svg';
import MainPageContext from 'src/context/mainPageContext';
import MainViewsNavigation from './MainViewsNavigation';
import MainViewsInfo from './MainViewsInfo';
import Wrapper from './MainPage.styles';
import AnimationBusiness from './AnimationBusiness';
import AnimationDesign from './AnimationDesign';
import AnimationData from './AnimationData';
import MainSectionWrapper from '../MainSectionWrapper/MainSectionWrapper.styles';

const DecorsWrapper = styled.div`
  svg {
    position: absolute;
    bottom: -4%;
    width: 200%;
    z-index: 2;

    ${({ theme }) => theme.mq.tablet} {
      bottom: -7%;
      width: 100%;
    }

    ${({ theme }) => theme.mq.mediumDesktop} {
      bottom: -8%;
    }
  }
`;

const MainPage = ({ setRef }) => {
  const { pageIndex } = useContext(MainPageContext);

  return (
    <MainSectionWrapper background="gray">
      <Wrapper ref={setRef} currentPage={pageIndex}>
        {pageIndex === 0 && <AnimationBusiness />}
        {pageIndex === 1 && <AnimationDesign />}
        {pageIndex === 2 && <AnimationData />}

        <MainViewsInfo currentPage={pageIndex} />
      </Wrapper>

      <MainViewsNavigation />

      {pageIndex === 1 && (
        <DecorsWrapper>
          <Waves />
        </DecorsWrapper>
      )}

      <Grid currentPage={pageIndex} />
    </MainSectionWrapper>
  );
};

export default MainPage;
