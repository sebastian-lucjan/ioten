import Link from 'next/link';
import StyledFooterRights from './FooterRights.styles';

const FooterRights = () => {
  return (
    <StyledFooterRights>
      <div>
        <div className="terms-wrapper">
          <Link href="/terms-of-use">
            <div>
              <p>Polityka prywatności</p>
            </div>
          </Link>
          <Link href="/terms-of-use">
            <div>
              <p>Regulamin użytkowania</p>
            </div>
          </Link>
        </div>
        <p>
          Copyright © {new Date().getFullYear()} <span>ioten</span> All Rights Reserved
        </p>
      </div>
    </StyledFooterRights>
  );
};

export default FooterRights;

// todo: change address of regulamin użytkowana
