import IotenLogo from 'src/assets/images/ioten-logo-main.svg';
import IotenNavLogo from 'src/assets/images/ioten-logo.svg';
import Link from 'next/link';
import useIsWhiteTextIntersection from 'src/hooks/useIsWhiteTextIntersection';
import { v4 as uuid } from 'uuid';
import MainSectionWrapper from 'src/components/MainSectionWrapper/MainSectionWrapper.styles';
import { navigationData } from 'src/data/pageData';
import theme from 'src/assets/styles/theme';
import styled from 'styled-components';
import { useState } from 'react';
import Burger from 'src/components/Burger';
import { useRouter } from 'next/router';
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
  z-index: ${({ theme: { zIndex } }) => zIndex.highest};

  ${({ theme: { mq } }) => mq.tablet} {
    display: none;
  }
`;

const Navigation = ({ whiteNavigationText, setRef }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isWhite = useIsWhiteTextIntersection(whiteNavigationText);

  const { asPath } = useRouter();

  const toggleNavigation = () => setIsOpen(!isOpen);

  const {
    gradient: { lightGray: lightGrayGradient },
  } = theme;

  return (
    <MainSectionWrapper background={lightGrayGradient} smaller>
      <LogoWrapper>
        <Link href="/">
          <StyledLogo>
            <IotenLogo />
          </StyledLogo>
        </Link>
      </LogoWrapper>

      <Burger setRef={setRef} isWhite={isWhite} isOpen={isOpen} toggleNavigation={toggleNavigation} />

      <Wrapper isOpen={isOpen}>
        <Link href="/">
          <StyledLogo>
            <IotenNavLogo />
          </StyledLogo>
        </Link>
        <StyledMenu asPath={asPath}>
          {navigationData.map(({ name, href, as }) => (
            <Link key={uuid()} href={href} as={as}>
              <StyledLink whiteNavigationText={isWhite}>{name}</StyledLink>
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
