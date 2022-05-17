import styled from 'styled-components';
import { TextParagraph } from '../TextComponents';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 80vh;
  margin: auto 0;
  padding: 0 40px;
  z-index: ${({ theme }) => theme.zIndex.peak};

  & > div > * {
    margin: 2rem 0;
  }

  ${({ theme }) => theme.mq.tablet} {
    flex-direction: row;
    height: 50vh;

    & > div {
      width: 50%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    height: 50vh;
    width: 100%;
    padding: 0 100px;
  }

  ${({ theme }) => theme.mq.bigDesktop} {
    padding: 0 100px;
  }

  ${({ theme }) => theme.mq.hugeDesktop} {
    padding: 0 180px;
  } ;
`;

export const StyledHeadingWrapper = styled.div`
  ${({ theme }) => theme.mq.tablet} {
    padding-right: 20px;

    & > :nth-child(1) {
      margin: 0;
    }
  }
`;

export const StyledContentWrapper = styled.div`
  ${({ theme }) => theme.mq.tablet} {
    padding-left: 20px;
  }
`;

export const StyledHeading = styled.p`
  font-family: ${({ theme }) => theme.font.family.myriadPro.bold};
  font-size: ${({ theme }) => theme.font.size.headingSection};
  color: ${({ theme, color }) => color || theme.color.black}; //passed color
  z-index: ${({ theme }) => theme.zIndex.peak};

  ${({ theme }) => theme.mq.bigDesktop} {
    font-size: ${({ theme }) => theme.font.size.headingBigDesktop};
    padding-right: 20px;
  }

  ${({ theme }) => theme.mq.hugeDesktop} {
    font-size: ${({ theme }) => theme.font.size.headingPage};
  }
`;

export const StyledParagraph = styled(({ ...props }) => <TextParagraph {...props} />)`
  ${({ theme }) => theme.mq.smallDesktop} {
    width: 50%;
    padding-right: 2rem;
  }

  ${({ theme }) => theme.mq.bigDesktop} {
    font-size: ${({ theme }) => theme.font.size.paragraph};
  }
`;
