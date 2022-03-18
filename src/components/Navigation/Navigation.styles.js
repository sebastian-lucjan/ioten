import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  //position: absolute;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.gradient.lightGray};
  position: relative;

  &::after {
    content: '';
    display: block;
    position: absolute;
    height: 100%;
    width: 2px;
    top: 0;
    left: 20px;
    background-color: ${({ theme }) => theme.color.gray};
  }
  &::before {
    content: '';
    display: block;
    position: absolute;
    height: 100%;
    width: 2px;
    top: 0;
    right: 20px;
    background-color: ${({ theme }) => theme.color.lightGray};
  }
`;

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  font-size: ${({ theme }) => theme.font.size.mobileMenu};
`;

export const StyledLink = styled.li`
  font-size: ${({ theme }) => theme.font.size.mobileMenu};
  list-style: none;
  align-self: center;
  margin: 20px auto;
  cursor: pointer;
`;
export const StyledLogo = styled.h1`
  font-size: 24px;
  margin: 18px 0 24px 0;
`;

export const StyledValuationButton = styled.button`
  margin-bottom: 80px;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.font.size.paragraph};
  border: none;
  position: relative;
  font-family: 'Myriad Pro Semibold', serif;
  cursor: pointer;

  &::before {
    content: '';
    display: block;
    position: absolute;
    bottom: -6px;
    left: -20px;
    width: 140%;
    height: 1px;
    background: ${({ theme }) => theme.gradient.rainbow.highlight};
  }
`;
