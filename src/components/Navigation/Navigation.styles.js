import styled from 'styled-components';

export const Wrapper = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme, isOpen }) => (isOpen ? theme.gradient.lightGray : 'transparent')};
  z-index: ${({ theme }) => theme.zIndex.highest};

  ${({ theme }) => theme.mq.tablet} {
    background: transparent;
    display: flex;
    flex-direction: row;
    height: 72px;
  }

  ${({ isOpen }) => {
    return (
      isOpen &&
      `&::after {
    content: '';
    display: block;
    position: absolute;
    height: 100%;
    width: 2px;
    top: 0;
    left: 20px;
    background-color: hsl(0, 0%, 80%);
  }
  &::before {
    content: '';
    display: block;
    position: absolute;
    height: 100%;
    width: 2px;
    top: 0;
    right: 20px;
    background-color: hsl(0, 0%, 80%);
  }`
    );
  }};
`;

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  width: 40%;
  font-size: ${({ theme }) => theme.font.size.paragraph};
  color: ${({ theme }) => theme.color.darkestGray};

  ${({ theme }) => theme.mq.tablet} {
    flex-direction: row;
    font-weight: 300;
  }
`;

// font-family: ${({ theme, isBold }) => (isBold  ? theme.font.family.myriadPro.bold : theme.font.family.myriadPro.regular)};
export const StyledLink = styled.li`
  font-size: ${({ theme }) => theme.font.size.paragraph};

  list-style: none;
  align-self: center;
  margin: 20px auto;
  cursor: pointer;
  letter-spacing: 1px;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-3px);
    font-weight: 800;
  }

  ${({ theme }) => theme.mq.tablet} {
    color: ${({ theme, whiteNavigationText }) => (whiteNavigationText ? theme.color.white : theme.color.darkestGray)};
  }
`;

export const StyledLogo = styled.a`
  display: block;
  margin: 16px;

  ${({ theme }) => theme.mq.tablet} {
    margin: 12px 48px;
  }
`;

export const StyledValuationButton = styled.button`
  margin-bottom: 80px;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.font.size.smallText};
  border: none;
  position: relative;
  font-family: ${({ theme }) => theme.font.family.myriadPro.bold};
  color: ${({ theme }) => theme.color.darkestGray};
  cursor: pointer;
  transition: 0.2s;

  &:active {
    box-shadow: 0 0 0 #0008;
    transform: translate(4px, 4px);
  }

  ${({ theme }) => theme.mq.tablet} {
    margin: 12px 48px 12px 0;
    text-transform: unset;
    color: ${({ theme }) => theme.color.white};
    padding: 12px 28px;
    background-color: ${({ theme }) => theme.color.darkestGray};
    box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.7);
  }

  &::before {
    content: '';
    display: block;
    position: absolute;
    bottom: -6px;
    left: -20px;
    width: 140%;
    height: 1px;
    background: ${({ theme }) => theme.gradient.rainbow.highlight};

    ${({ theme }) => theme.mq.tablet} {
      display: none;
    }
  }
`;
