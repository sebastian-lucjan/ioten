import Link from 'next/link';
// import Logo from 'src/assets/images/ioten-logo.svg';
import MainSectionWrapper from 'src/components/MainSectionWrapper/MainSectionWrapper.styles';
import { Wrapper, StyledValuationButton, StyledMenu, StyledLink, StyledLogo } from './Navigation.styles';

const Navigation = () => {
  return (
    <MainSectionWrapper colors={{ isGradient: false, bgColor: 'white', linesColor: 'lightGray' }}>
      <Wrapper>
        <Link href="/">
          {/* <Logo /> */}
          <StyledLogo>ioten</StyledLogo>
        </Link>
        <StyledMenu>
          <Link href="/">
            <StyledLink>Home</StyledLink>
          </Link>
          <Link href="/services" as="/uslugi">
            <StyledLink>Usługi</StyledLink>
          </Link>
          <Link href="/about" as="/o-nas">
            <StyledLink>O nas</StyledLink>
          </Link>
          <Link href="/blog" as="/blog">
            <StyledLink>Blog</StyledLink>
          </Link>
          <Link href="/contact" as="/kontakt">
            <StyledLink>Kontakt</StyledLink>
          </Link>
        </StyledMenu>
        <Link href="/valuation" as="/wycena-projektu">
          <StyledValuationButton type="button">Wyceń projekt</StyledValuationButton>
        </Link>
      </Wrapper>
    </MainSectionWrapper>
  );
};

export default Navigation;
