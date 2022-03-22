import styled from 'styled-components';

export const Wrapper = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme, isOpen }) => (isOpen ? theme.gradient.lightGray : 'transparent')};
  z-index: 1;

  ${({ theme }) => theme.mq.tablet} {
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
    z-index: 10;
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

  ${({ theme }) => theme.mq.tablet} {
    font-family: 'Myriad Pro Light', serif;
    flex-direction: row;
    font-weight: 300;
  }
`;

export const StyledLink = styled.li`
  font-size: ${({ theme }) => theme.font.size.paragraph};
  list-style: none;
  align-self: center;
  margin: 20px auto;
  cursor: pointer;
`;
export const StyledLogo = styled.h1`
  display: block;
  font-size: 24px;

  ${({ theme }) => theme.mq.tablet} {
    display: ${({ isMobile }) => (isMobile ? 'block' : 'none')};
    margin: 12px 48px;
  }
`;

export const StyledValuationButton = styled.button`
  margin-bottom: 80px;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.font.size.paragraph};
  border: none;
  position: relative;
  font-family: 'Myriad Pro Semibold', serif;
  cursor: pointer;

  ${({ theme }) => theme.mq.tablet} {
    margin: 12px 48px;
    text-transform: unset;
    color: ${({ theme }) => theme.color.white};
    padding: 12px 28px;
    background-color: ${({ theme }) => theme.color.darkestGray};
    box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.7);
    //display: none;
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
