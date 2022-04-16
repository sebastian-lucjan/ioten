import styled from 'styled-components';
import { TextHeading } from 'src/components/TextComponents';

export const ServiceStage = styled.div`
  position: relative;
  font-size: ${({ theme }) => theme.font.size.paragraph};
  font-family: ${({ theme }) => theme.font.family.myriadPro.bold};
  font-weight: 400;
  margin-left: 20px;
  color: ${({ theme, color, isActive }) => (isActive ? color : theme.color.darkestGray)};
  cursor: pointer;
  z-index: ${({ theme }) => theme.zIndex.peak};

  &:after {
    display: block;
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: -50px;
    width: 22px;
    height: 22px;
    background: ${({ theme, color, desaturate }) => (desaturate ? theme.color.lightGray : color)};
    border: 2px ${({ theme, color, desaturate }) => (desaturate ? theme.color.lightGray : color)} solid;
    box-shadow: inset 0 0 0 6px ${({ theme }) => theme.color.lightestGray};
    border-radius: 50%;
    z-index: ${({ theme }) => theme.zIndex.peak};
  }

  ${({ theme }) => theme.mq.desktop} {
    font-size: ${({ theme }) => theme.font.size.headingSmall};
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
  justify-content: space-between;
  padding: ${({ short }) => (short ? '40px' : '100px 40px')};
  color: ${({ theme }) => theme.color.darkestGray};
  height: ${({ short }) => (short ? 'unset' : '100vh')};

  ${({ theme }) => theme.mq.tablet} {
    padding: 80px 40px;

    article {
      width: 48%;
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    article {
      width: 23%;
    }
  }

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
      background-color: ${({ theme }) => theme.color.black};
      z-index: ${({ theme }) => theme.zIndex[10]};
    }
  }

  .services-axis__sign-question-mark {
    position: absolute;
    top: 0;
    width: 32px;
    height: 100%;
    left: 5px;
    background: ${({ theme }) => theme.gradient.lightGrayTransparentLightGray};
    font-size: ${({ theme }) => theme.font.size.headingSection};
    color: ${({ theme }) => theme.color.lightGray};
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: ${({ theme }) => theme.zIndex.peak};
  }
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
