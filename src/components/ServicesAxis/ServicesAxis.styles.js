import styled from 'styled-components';
import { TextHeading } from 'src/components/TextComponents';
import Arrow from 'src/assets/images/service-detail-arrow.svg';

export const StyledArrow = styled(Arrow)`
  margin-left: 1rem;
  fill: ${({ theme }) => theme.color.gray}; ;
`;

export const ServiceStageWrapper = styled.div`
  ${({ theme }) => theme.mq.desktop} {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  } ;
`;

export const ServiceStageHeading = styled.h3`
  font-size: ${({ theme }) => theme.font.size.paragraph};
  font-family: ${({ theme }) => theme.font.family.myriadPro.bold};
  font-weight: 400;
  color: ${({ theme, color, isActive }) => (isActive ? color : theme.color.darkestGray)};

  ${({ theme }) => theme.mq.desktop} {
    font-size: ${({ theme }) => theme.font.size.headingSection};
  } ;
`;

export const ServiceStageParagraph = styled.p`
  width: calc(100% - 20px);
  font-size: ${({ theme }) => theme.font.size.paragraphSmall};
  line-height: 32px;

  ${({ theme }) => theme.mq.tablet} {
    width: calc(50% - 20px);
  }

  ${({ theme }) => theme.mq.desktop} {
    width: calc(25vw - 40px);
  } ;
`;

export const ServiceStageAsideLink = styled.a`
  text-decoration: underline;
  font-size: ${({ theme }) => theme.font.size.smallText};
  color: ${({ theme }) => theme.color.darkerGray};
  margin-top: 2rem;
  cursor: pointer;
`;

export const ServiceStage = styled.div`
  position: relative;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  z-index: ${({ theme }) => theme.zIndex.peak};

  &:after {
    margin-left: 20px;
    display: block;
    content: '';
    position: absolute;
    top: 40%;
    transform: translateY(-50%);
    left: -50px;
    width: 22px;
    height: 22px;
    background: ${({ color }) => color};
    border: 2px ${({ color }) => color} solid;
    box-shadow: inset 0 0 0 6px ${({ theme }) => theme.color.white};
    border-radius: 50%;
  }

  ${({ theme }) => theme.mq.desktop} {
    font-size: ${({ theme }) => theme.font.size.headingSmall};
    max-width: calc(25vw - 40px);

    &:after {
      //background: lightgray;
      //border: 2px lightgray solid;
    }
  }

  ${({ theme }) => theme.mq.mediumDesktop} {
    font-size: ${({ theme }) => theme.font.size.paragraphBig};
  }

  ${({ theme }) => theme.mq.hugeDesktop} {
    font-size: ${({ theme }) => theme.font.size.headingMedium};
  } ;
`;

export const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  color: ${({ theme }) => theme.color.darkestGray};
  height: ${({ short }) => (short ? 'unset' : '300vh')};
  padding: ${({ short }) => (short ? '40px' : '100px 40px')};

  ${({ theme }) => theme.mq.tablet} {
    padding: 80px 40px;

    article {
      width: 48%;
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    height: unset;
    justify-content: space-between;

    article {
      width: 23%;
    }
  }

  // ${({ theme }) => theme.mq.mediumDesktop} {
  // height: ${({ short }) => (short ? 'unset' : '170vh')};
  //}

  // ${({ theme }) => theme.mq.hugeDesktop} {
  // height: ${({ short }) => (short ? 'unset' : '150vh')};
  //}

  article:nth-child(1) {
    padding: 0 0 60px 0;
  }

  .services-axis__paragraph {
    padding-top: 2rem;
  }

  .services-axis__emphasis {
    font-family: ${({ theme }) => theme.font.family.myriadPro.black};
  }

  .services-axis__sign-axis-start {
    &:after {
      content: '';
      position: absolute;
      top: calc(50% - 2px);
      left: -32px;
      width: 24px;
      height: 4px;
      background-color: ${({ theme }) => theme.color.lightGray};
      z-index: ${({ theme }) => theme.zIndex[10]};
    }
  }

  .services-axis__sign-question-mark {
    position: absolute;
    top: 0;
    width: 32px;
    height: 100%;
    left: 5px;
    background: ${({ theme }) => theme.gradient.transparentWhiteTransparent};
    font-size: ${({ theme }) => theme.font.size.headingSection};
    color: ${({ theme }) => theme.color.lightGray};
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: ${({ theme }) => theme.zIndex.peak};
  }
`;

export const StageContainer = styled.div`
  display: flex;
  width: calc(100vw - 80px);
`;

export const StyledServicesAxis = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: ${({ smaller }) => (smaller ? '' : '100vh')};
  background: ${({ colors }) => colors.background};
`;

export const IntroHeading = styled(({ ...props }) => <TextHeading as="h2" size="md" {...props} />)`
  ${({ theme }) => theme.mq.desktop} {
    font-size: ${({ theme }) => theme.font.size.paragraphBig};
  }

  ${({ theme }) => theme.mq.mediumDesktop} {
    font-size: ${({ theme }) => theme.font.size.headingMedium};
  }

  ${({ theme }) => theme.mq.hugeDesktop} {
    font-size: ${({ theme }) => theme.font.size.headingSection};
    padding: 30px 0 10px 0;
  } ;
`;

export const OtherHeading = styled(({ ...props }) => <TextHeading as="h3" size="sm" {...props} />)`
  ${({ theme }) => theme.mq.desktop} {
    font-size: ${({ theme }) => theme.font.size.paragraph};
  }

  ${({ theme }) => theme.mq.mediumDesktop} {
    font-size: ${({ theme }) => theme.font.size.headingSmall};
  }

  ${({ theme }) => theme.mq.hugeDesktop} {
    font-size: ${({ theme }) => theme.font.size.headingMedium};
  } ;
`;
