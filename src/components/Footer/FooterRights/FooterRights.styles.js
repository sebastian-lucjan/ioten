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

export default StyledFooterRights;
