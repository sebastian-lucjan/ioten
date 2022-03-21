import Link from 'next/link';
import styled from 'styled-components';

const StyledFooterRights = styled.div`
  margin-bottom: 1.6rem;
  color: ${({ theme }) => theme.color.gray};
  font-size: ${({ theme }) => theme.font.size.caption};

  .terms-wrapper {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 1.6rem;
  }
  span {
    font-weight: bold;
    color: ${({ theme }) => theme.color.darkerGray};
    margin: 0 4px;
  }
`;

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
