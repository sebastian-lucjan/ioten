import Navigation from 'src/components/Navigation';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import Footer from '../Footer';

const StyledBaseLayout = styled.main`
  overflow: hidden;
`;

const handleScrollTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

const StyledScrollTop = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: ${({ theme }) => theme.zIndex.top};

  button {
    border: none;
    background: none;
    cursor: pointer;
  }
`;

function ScrollTop() {
  return (
    <StyledScrollTop>
      <button type="button" onClick={handleScrollTop}>
        <Icon icon="ph:caret-up-bold" width={30} height={30} />
        {/* <Icon className={`scrollToTopIcon ${white ? 'text-white' : 'text-black'}`} icon="ph:caret-up-bold" width={30} height={30} /> */}
      </button>
    </StyledScrollTop>
  );
}

const BaseLayout = ({ children, footerGridColor, whiteNavigationText, setRef, hideScrollTop }) => {
  const [isFooterVisible, setIsFooterVisible] = useState(true);
  const { asPath } = useRouter();

  useEffect(() => {
    if (asPath === '/wycena-projektu') {
      setIsFooterVisible(false);
    }
  }, [asPath]);

  return (
    <StyledBaseLayout>
      <Navigation setRef={setRef} whiteNavigationText={whiteNavigationText} />
      {children}
      {hideScrollTop ? null : <ScrollTop />}
      {isFooterVisible ? <Footer footerGridColor={footerGridColor} /> : null}
    </StyledBaseLayout>
  );
};

export default BaseLayout;
