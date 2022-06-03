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
    overflow: unset; //property set because of sticky elements
  } ;
`;

// todo: home page overflow hidden

const BaseLayout = ({ children, footerGridColor, whiteNavigationText, setRef }) => {
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
    <StyledBaseLayout>
      <Navigation setRef={setRef} whiteNavigationText={whiteNavigationText} />
      {children}
      {isFooterVisible ? <Footer footerGridColor={footerGridColor} /> : null}
    </StyledBaseLayout>
  );
};

export default BaseLayout;
