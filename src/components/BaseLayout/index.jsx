import Navigation from 'src/components/Navigation';
import Footer from 'src/components/Footer';
import styled from 'styled-components';

const StyledBaseLayout = styled.main`
  overflow: hidden;
`;

const BaseLayout = ({ children }) => {
  return (
    <StyledBaseLayout>
      <Navigation />
      {children}
      <Footer />
    </StyledBaseLayout>
  );
};

export default BaseLayout;
