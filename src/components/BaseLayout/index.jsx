import Navigation from 'src/components/Navigation';
import Footer from 'src/components/Footer';
import styled from 'styled-components';

const StyledBaseLayout = styled.main`
  overflow: hidden;
`;

const BaseLayout = ({ children, footerGridColor }) => {
  return (
    <StyledBaseLayout>
      <Navigation />
      {children}
      <Footer footerGridColor={footerGridColor} />
    </StyledBaseLayout>
  );
};

export default BaseLayout;
