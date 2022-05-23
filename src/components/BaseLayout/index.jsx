import Navigation from 'src/components/Navigation';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Footer from '../Footer';

const StyledBaseLayout = styled.main`
  overflow: hidden;

  ${({ theme }) => theme.mq.smallDesktop} {
    overflow: unset; //property set because of sticky elements
  } ;
`;

const BaseLayout = ({ children, footerGridColor, whiteNavigationText, setRef }) => {
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
      {isFooterVisible ? <Footer footerGridColor={footerGridColor} /> : null}
    </StyledBaseLayout>
  );
};

export default BaseLayout;
