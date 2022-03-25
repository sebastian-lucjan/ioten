import styled from 'styled-components';

export const ServiceStage = styled.div`
  position: relative;
  font-size: ${({ theme }) => theme.font.size.paragraph};
  font-family: ${({ theme }) => theme.font.family.myriadPro.bold};
  font-weight: 400;
  margin-left: 20px;
  color: ${({ theme, color, isActive }) => (isActive ? color : theme.color.darkestGray)};
  cursor: pointer;

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
`;

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${({ short }) => (short ? '40px' : '100px 40px')};
  color: ${({ theme }) => theme.color.darkestGray};
  height: ${({ short }) => (short ? 'unset' : '100vh')};

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
    position: absolute;
    top: calc(50% - 2px);
    left: -32px;
    width: 24px;
    height: 4px;
    background-color: ${({ theme }) => theme.color.black};
    z-index: ${({ theme }) => theme.zIndex.peak};
  }

  .services-axis__sign-question-mark {
    position: absolute;
    top: 0;
    width: 32px;
    height: 100%;
    left: -34px;
    background: ${({ theme }) => theme.gradient.lightGrayTransparantLightGray};
    font-size: ${({ theme }) => theme.font.size.headingSection};
    color: ${({ theme }) => theme.color.lightGray};
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: ${({ theme }) => theme.zIndex.peak};

    &::after {
      content: '?';
      display: block;
    }
  }
`;

export const StyledServicesAxis = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  min-height: ${({ smaller }) => (smaller ? '' : '100vh')};
  background: ${({ colors }) => colors.background};

  &::after,
  &::before {
    content: '';
    display: block;
    position: absolute;
    height: 100%;
    width: 2px;
    top: 0;
    background: ${({ theme, colors, desaturate }) => (desaturate ? theme.color.lightGray : colors.lines)};
    z-index: ${({ theme }) => theme.zIndex.top};
  }

  &::after {
    left: 20px;
  }

  &::before {
    right: 20px;
  }
`;
