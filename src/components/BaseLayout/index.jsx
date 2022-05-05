import Navigation from 'src/components/Navigation';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Footer from '../Footer';

const StyledBaseLayout = styled.main`
  overflow: hidden;
`;

const BaseLayout = ({ children, footerGridColor, whiteNavigationText, setRef }) => {
  const { asPath } = useRouter();

  return (
    <StyledBaseLayout>
      <Navigation setRef={setRef} whiteNavigationText={whiteNavigationText} />
      {children}
      {asPath !== '/wycena-projektu' ? <Footer footerGridColor={footerGridColor} /> : null}
    </StyledBaseLayout>
  );
};

export default BaseLayout;
