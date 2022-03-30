import styled from 'styled-components';
import { TextWrapper } from 'src/components/TextComponents';
import AnimationOnePlaceholder from 'src/assets/images/animation-1-placeholder.svg';

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

  ${({ theme }) => theme.mq.smallDesktop} {
    position: unset;
    top: unset;
    display: flex;
    align-items: center;
    height: 60vh;
  } ;
`;

export const AnimationPlaceholder = styled(AnimationOnePlaceholder)`
  position: absolute;
  top: 20vh;
  left: 0;
  width: 100%;
  height: 50vh;
  transform: scale(0.9);
  z-index: ${({ theme }) => theme.zIndex.top};

  ${({ theme }) => theme.mq.tablet} {
    transform: scale(0.9);
  }

  ${({ theme }) => theme.mq.smallDesktop} {
    margin-left: 0;
    transform: scale(0.9);
    height: 60vh;
    top: unset;
    position: unset;
  } ;
`;
