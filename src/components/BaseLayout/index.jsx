import Navigation from 'src/components/Navigation';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import Footer from 'src/components/Footer';
import 'aos/dist/aos.css';
import Cookies from 'src/components/Cookies';
import useCookie from 'src/hooks/useCookie';
import { CookiesContext } from 'src/context/cookiesContext';

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
  const { isActiveCookiePopUp, handleCookiesPolicyAgree, handleDismissCookiesPopUp } = useCookie();
  console.log('isActiveCookiePopUp', isActiveCookiePopUp);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    if (asPath === '/wycena-projektu') {
      setIsFooterVisible(false);
    }
  }, [asPath]);

  return (
    <CookiesContext.Provider value={{ isActiveCookiePopUp, handleCookiesPolicyAgree, handleDismissCookiesPopUp }}>
      <StyledBaseLayout noOverflow={noOverflow}>
        <Navigation setRef={setRef} whiteNavigationText={whiteNavigationText} />
        {children}
        {isFooterVisible ? <Footer footerGridColor={footerGridColor} /> : null}
        {isActiveCookiePopUp ? <Cookies /> : null}
      </StyledBaseLayout>
    </CookiesContext.Provider>
  );
};

export default BaseLayout;
