import styled from 'styled-components';

const StyledFooterRights = styled.div`
  padding: 0 40px 10px 40px;
  margin-bottom: 1.6rem;
  color: ${({ theme }) => theme.color.gray};
  font-size: ${({ theme }) => theme.font.size.caption};

  .terms-wrapper {
    display: flex;
    width: 100%;
    justify-content: flex-start;
    margin-bottom: 1.6rem;

    div {
      padding-right: 20px;
    }
  }
  span {
    font-weight: bold;
    color: ${({ theme }) => theme.color.darkerGray};
    margin: 0 4px;
  }

  a {
    padding-right: 1rem;
    color: ${({ theme }) => theme.color.gray};
    text-decoration: none;
  }
`;

export default StyledFooterRights;
