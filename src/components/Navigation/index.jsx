import Link from 'next/link';
// import Logo from 'src/assets/images/ioten-logo.svg';
import { v4 as uuid } from 'uuid';
import MainSectionWrapper from 'src/components/MainSectionWrapper/MainSectionWrapper.styles';
import { navigationData } from 'src/data/pageData';
import theme from 'src/assets/styles/theme';
import { Wrapper, StyledValuationButton, StyledMenu, StyledLink, StyledLogo } from './Navigation.styles';

const Navigation = () => {
  const {
    color: { lightGray },
    gradient: { lightGray: lightGrayGradient },
  } = theme;

  return (
    <MainSectionWrapper colors={{ background: lightGrayGradient, lines: lightGray }} smaller>
      <Wrapper>
        <Link href="/">
          {/* <Logo /> */}
          <StyledLogo>ioten</StyledLogo>
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
