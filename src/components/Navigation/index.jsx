import IotenLogo from 'src/assets/images/ioten-logo-main.svg';
import IotenNavLogo from 'src/assets/images/ioten-logo.svg';
import Link from 'next/link';
import { v4 as uuid } from 'uuid';
import MainSectionWrapper from 'src/components/MainSectionWrapper/MainSectionWrapper.styles';
import { navigationData } from 'src/data/pageData';
import theme from 'src/assets/styles/theme';
import styled from 'styled-components';
import StyledBurger from 'src/components/Burger/Burger.styles';
import { useState } from 'react';
import { Wrapper, StyledValuationButton, StyledMenu, StyledLink, StyledLogo } from './Navigation.styles';

const LogoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  padding: 10px 30px;
  z-index: ${({ theme: { zIndex } }) => zIndex.top};

  ${({ theme: { mq } }) => mq.tablet} {
    display: none;
  }
`;

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavigation = () => {
    setIsOpen(!isOpen);
  };

  const {
    color: { lightGray },
    gradient: { lightGray: lightGrayGradient },
  } = theme;

  return (
    <MainSectionWrapper colors={{ background: lightGrayGradient, lines: lightGray }} smaller>
      <LogoWrapper>
        <Link href="/">
          <StyledLogo>
            <IotenLogo />
            {/* <div> ioten</div> */}
          </StyledLogo>
        </Link>
      </LogoWrapper>
      <StyledBurger onClick={toggleNavigation}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <Wrapper isOpen={isOpen}>
        <Link href="/">
          <StyledLogo>
            <IotenNavLogo />
          </StyledLogo>
        </Link>
        <StyledMenu>
          {navigationData.map(({ name, href, as }) => (
            <Link key={uuid()} href={href} as={as}>
              <StyledLink>{name}</StyledLink>
            </Link>
          ))}
        </StyledMenu>
        <Link href="/valuation" as="/wycena-projektu">
          <StyledValuationButton type="button">Wyceń projekt</StyledValuationButton>
        </Link>
      </Wrapper>
    </MainSectionWrapper>
  );
};

export default Navigation;
