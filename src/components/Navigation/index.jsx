import Link from 'next/link';
// import Logo from 'src/assets/images/ioten-logo.svg';
import styled from 'styled-components';
import { Wrapper, StyledValuationButton } from './Navigation.styles';

const StyledLogo = styled.h1`
  font-size: 24px;
`;

const Navigation = () => {
  return (
    <Wrapper>
      <Link href="/">
        {/* <Logo /> */}
        <StyledLogo>ioten</StyledLogo>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/services" as="/uslugi">
              Usługi
            </Link>
          </li>
          <li>
            <Link href="/about" as="/o-nas">
              O nas
            </Link>
          </li>
          <li>
            <Link href="/blog" as="/blog">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/contact" as="/kontakt">
              Kontakt
            </Link>
          </li>
        </ul>

        <Link href="/valuation" as="/wycena-projektu">
          <StyledValuationButton type="button">Wyceń projekt</StyledValuationButton>
        </Link>
      </nav>
    </Wrapper>
  );
};

export default Navigation;
