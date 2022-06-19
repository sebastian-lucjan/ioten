import { Icon } from '@iconify/react';
import { useContext } from 'react';
import Link from 'next/link';
import { CookiesContext } from 'src/context/cookiesContext';
import { Anchor, CookieButton, CookiesPopUp, ExitSign, Wrapper } from './Cookies.styles';

const Cookies = () => {
  const { handleCookiesPolicyAgree, handleDismissCookiesPopUp } = useContext(CookiesContext);

  return (
    <CookiesPopUp>
      <Wrapper>
        <p>
          W celu świadczenia usług na najwyższym poziomie stosujemy pliki cookies, które będą zamieszczane w Państwa urządzeniu (komputerze, laptopie,
          smartfonie). W każdym momencie mogą Państwo dokonać zmiany ustawień Państwa przeglądarki internetowej i wyłączyć opcję zapisu plików
          cookies. Ze szczegółowymi informacjami dotyczącymi cookies na tej stronie można się zapoznać tutaj:
          <Link href="/polityka-prywatnosci">
            <Anchor target="_blank" rel="noreferrer">
              polityka prywatności
            </Anchor>
          </Link>
        </p>
        <CookieButton
          type="submit"
          className="underline cookies__accept underline-offset-2"
          onClick={handleCookiesPolicyAgree}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleCookiesPolicyAgree();
            }
          }}
          tabIndex={0}
        >
          Ok, akceptuję.
        </CookieButton>
      </Wrapper>
      <ExitSign>
        <Icon
          tabIndex={0}
          onClick={() => handleDismissCookiesPopUp(false)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleDismissCookiesPopUp(false);
            }
          }}
          icon="feather:x"
          aria-hidden={false}
          alt="zamknij okno cookies bez podejmowania decyzji"
        />
      </ExitSign>
    </CookiesPopUp>
  );
};

export default Cookies;
