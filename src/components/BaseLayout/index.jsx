import Navigation from 'src/components/Navigation';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import Footer from '../Footer';
import 'aos/dist/aos.css';

const StyledBaseLayout = styled.main`
  overflow: hidden;

  ${({ theme }) => theme.mq.smallDesktop} {
    /*property 'overflow' set because of sticky elements
    noOverflow is passed as true only for services page*/
    overflow: ${({ noOverflow }) => (noOverflow ? 'unset' : 'hidden')};
  } ;
`;

const BaseLayout = ({ children, footerGridColor, whiteNavigationText, setRef, noOverflow }) => {
  const [isFooterVisible, setIsFooterVisible] = useState(true);
  const { asPath } = useRouter();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    if (asPath === '/wycena-projektu') {
      setIsFooterVisible(false);
    }
  }, [asPath]);

  return (
    <StyledBaseLayout noOverflow={noOverflow}>
      <Navigation setRef={setRef} whiteNavigationText={whiteNavigationText} />
      {children}
      {isFooterVisible ? <Footer footerGridColor={footerGridColor} /> : null}
    </StyledBaseLayout>
  );
};

export default BaseLayout;
