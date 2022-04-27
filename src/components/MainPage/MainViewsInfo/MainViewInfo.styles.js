import styled from 'styled-components';
import { TextWrapper } from 'src/components/TextComponents';
// import AnimationOnePlaceholder from 'src/assets/images/home-animation-business.svg';
// import AnimationOnePlaceholder from 'src/assets/images/home-animation-business-green.svg';
// import AnimationOnePlaceholder from 'src/assets/images/animation-1-placeholder.svg';
// import AnimationOnePlaceholder from 'src/assets/images/text-io-block-3.svg';
// import AnimationOnePlaceholder from 'src/assets/images/text-io-block.svg';

export const Wrapper = styled(TextWrapper)`
  padding: 0 40px;

  ${({ theme }) => theme.mq.tablet} {
    padding: 40px 0;
    margin: 0 auto;
    width: 70%;

    h2 {
      margin-bottom: 1rem;
    }

    p {
      font-size: ${({ theme }) => theme.font.size.paragraph};
      line-height: 28px;
    }
  }

  ${({ theme }) => theme.mq.smallDesktop} {
    h2 {
      font-size: ${({ theme }) => theme.font.size.headingSection};
      margin-bottom: 2rem;
    }

    p {
      font-size: ${({ theme }) => theme.font.size.paragraph};
    }
  }

  ${({ theme }) => theme.mq.mediumDesktop} {
    h2 {
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
  top: 70vh;
  width: 100%;
  height: 100%;
  z-index: ${({ theme }) => theme.zIndex.peak};

  color: ${({ currentPage }) => (currentPage === 1 ? 'white' : 'black')};

  ${({ theme }) => theme.mq.smallDesktop} {
    position: unset;
    top: unset;
    display: flex;
    align-items: center;
    height: 60vh;
  } ;
`;
