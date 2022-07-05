import Link from 'next/link';
import StyledFooterRights from './FooterRights.styles';

const FooterRights = () => {
  return (
    <StyledFooterRights>
      <div>
        <div className="terms-wrapper">
          <Link href="/policy" as="/polityka-prywatnosci">
            <a>
              <p>Polityka prywatności</p>
            </a>
          </Link>
          {/* <Link href="/policy" as="/polityka-prywatnosci"> */}
          {/*  /!* <Link href="/terms-of-use"> *!/ */}
          {/*  <a> */}
          {/*    <p>Regulamin użytkowania</p> */}
          {/*  </a> */}
          {/* </Link> */}
        </div>
        <p>
          Copyright © {new Date().getFullYear()} <span>ioten</span> All Rights Reserved
        </p>
      </div>
    </StyledFooterRights>
  );
};

export default FooterRights;
