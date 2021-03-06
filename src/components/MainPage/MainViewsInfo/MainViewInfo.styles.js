import styled from 'styled-components';
import { TextWrapper } from 'src/components/TextComponents';

export const Wrapper = styled(TextWrapper)`
  padding: 0 40px;
  h1 {
    font-size: ${({ theme }) => theme.font.size.paragraph};
  }

  p {
    font-size: ${({ theme }) => theme.font.size.caption};
  }
  ${({ theme }) => theme.mq.mediumMobile} {
    h1 {
      font-size: ${({ theme }) => theme.font.size.paragraphBig};
    }

    p {
      font-size: ${({ theme }) => theme.font.size.smallText};
    }
  }

  ${({ theme }) => theme.mq.tablet} {
    padding: 40px 0;
    margin: 0 auto;
    width: 70%;

    h1 {
      font-size: ${({ theme }) => theme.font.size.headingSection};
      margin-bottom: 1rem;
    }

    p {
      font-size: ${({ theme }) => theme.font.size.paragraph};
      line-height: 28px;
    }
  }

  ${({ theme }) => theme.mq.smallDesktop} {
    width: 80%;

    h1 {
      font-size: ${({ theme }) => theme.font.size.headingSection};
      margin-bottom: 2rem;
    }

    p {
      font-size: ${({ theme }) => theme.font.size.paragraph};
    }
  }

  ${({ theme }) => theme.mq.mediumDesktop} {
    width: 70%;
    h1 {
      font-size: ${({ theme }) => theme.font.size.headingPage};
      margin-bottom: 2rem;
    }

    p {
      font-size: ${({ theme }) => theme.font.size.headingSmall};
    }
  }
`;

export const StyledMainViewsInfo = styled.div`
  position: absolute;
  top: 57vh;
  width: 100%;
  height: 100%;
  z-index: ${({ theme }) => theme.zIndex.peak};
  color: ${({ currentPage }) => (currentPage === 1 ? 'white' : 'black')};

  //really short browser view
  @media (orientation: portrait) and (min-width: 360px) and (max-height: 640px) {
    top: 63vh;
  }

  ${({ theme }) => theme.mq.tablet} {
    top: 68vh;
  }

  ${({ theme }) => theme.mq.landscape} {
    top: 60vh;
  }

  @media (orientation: landscape) and (min-width: 768px) and (max-width: 1023px) {
    top: 55vh;
  }

  ${({ theme }) => theme.mq.smallDesktop} {
    position: unset;
    top: unset;
    display: flex;
    align-items: center;
    height: 60vh;
  } ;
`;

export const HeadingWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;

  ${({ theme }) => theme.mq.mediumMobile} {
    margin-bottom: 1rem;
  }

  h1 {
    margin: 0;
    //really short browser view
    @media (orientation: portrait) and (min-width: 360px) and (max-height: 640px) {
      font-size: 18px;
    }
  }
`;
