import { useState } from 'react';
import MainPageContext from 'src/context/mainPageContext';
import Grid from 'src/components/Grid';
import styled from 'styled-components';
import Waves from 'src/assets/images/waves-net.svg';
// import Image from 'next/image';
// import crosses from 'src/assets/images/crossies.png';
// import moon from 'src/assets/images/moon.png';
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
//
// const CrossesWrapper = styled.div``;
//
// const Shape = styled.div`
//   display: none;
//
//   ${({ theme }) => theme.mq.tablet} {
//     display: block;
//     position: absolute;
//   }
// `;
// const CrossesOne = styled(Shape)`
//   ${({ theme }) => theme.mq.tablet} {
//     top: 20%;
//     left: 10%;
//   }
// `;
//
// const CrossesTwo = styled(Shape)`
//   ${({ theme }) => theme.mq.tablet} {
//     top: 50%;
//     left: 85%;
//   }
// `;
//
// const Moon = styled(Shape)`
//   ${({ theme }) => theme.mq.tablet} {
//     top: 60%;
//     left: 7%;
//   }
// `;

const MainPage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [dataBooster, setDataBooster] = useState('initial-state');

  return (
    <MainSectionWrapper background="gray">
      <MainPageContext.Provider value={{ pageIndex: currentPage, setCurrentPage, dataBooster, setDataBooster }}>
        <Wrapper currentPage={currentPage}>
          {currentPage === 0 && <AnimationBusiness />}
          {currentPage === 1 && <AnimationDesign />}
          {currentPage === 2 && <AnimationData />}
          <MainViewsInfo currentPage={currentPage} />
        </Wrapper>

        <MainViewsNavigation />

        {currentPage === 1 && (
          <DecorsWrapper>
            <Waves />
            {/* <CrossesWrapper> */}
            {/*  <CrossesOne> */}
            {/*    <Image src={crosses} alt="kształty geometryczne, krzyżyki" width={60} height={60} /> */}
            {/*  </CrossesOne> */}
            {/*  <CrossesTwo> */}
            {/*    <Image src={crosses} alt="kształty geometryczne, krzyżyki" width={50} height={50} /> */}
            {/*  </CrossesTwo> */}
            {/*  <Moon> */}
            {/*    <Image src={moon} alt="kształt małego księżyca" width={70} height={70} /> */}
            {/*  </Moon> */}
            {/* </CrossesWrapper> */}
          </DecorsWrapper>
        )}

        <Grid currentPage={currentPage} />
      </MainPageContext.Provider>
    </MainSectionWrapper>
  );
};

export default MainPage;
