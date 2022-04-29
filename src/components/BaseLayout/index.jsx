import Navigation from 'src/components/Navigation';
import styled from 'styled-components';
import Footer from '../Footer';

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
