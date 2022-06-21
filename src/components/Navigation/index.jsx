import IotenLogo from 'src/assets/images/ioten-logo-main.svg';
import IotenNavLogo from 'src/assets/images/ioten-logo.svg';
import Link from 'next/link';
import useIsWhiteTextIntersection from 'src/hooks/useIsWhiteTextIntersection';
import { v4 as uuid } from 'uuid';
import MainSectionWrapper from 'src/components/MainSectionWrapper/MainSectionWrapper.styles';
import { navigationData } from 'src/data/pageData';
import theme from 'src/assets/styles/theme';
import { useState } from 'react';
import Burger from 'src/components/Burger';
import { useRouter } from 'next/router';
import { Wrapper, StyledMenu, StyledLink, StyledLogo, StyledValuationButton, LogoWrapper } from './Navigation.styles';

const closeNavTheSamePath = (currentPath, navButtonPath, setIsOpen) => {
  if (currentPath === navButtonPath) setIsOpen(false);
};

const Navigation = ({ whiteNavigationText, setRef }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isWhite = useIsWhiteTextIntersection(whiteNavigationText);

  const { asPath: currentPath } = useRouter();

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
        <StyledMenu asPath={currentPath}>
          {navigationData.map(({ name, href, as: navButtonPath }) => {
            return (
              <Link key={uuid()} href={href} as={navButtonPath}>
                <StyledLink
                  linkHref={navButtonPath}
                  currentPath={currentPath}
                  whiteNavigationText={isWhite}
                  onClick={() => closeNavTheSamePath(currentPath, navButtonPath, setIsOpen)}
                >
                  {name}
                </StyledLink>
              </Link>
            );
          })}
        </StyledMenu>
        <Link href="/valuation" as="/wycena-projektu">
          <StyledValuationButton onClick={() => closeNavTheSamePath(currentPath, '/wycena-projektu', setIsOpen)} type="button">
            Wyceń projekt
          </StyledValuationButton>
        </Link>
      </Wrapper>
    </MainSectionWrapper>
  );
};

export default Navigation;
