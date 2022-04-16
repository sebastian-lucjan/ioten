import styled from 'styled-components';

const StyledSocialMedias = styled.div`
  display: flex;
  color: ${({ theme }) => theme.color.gray};

  a {
    cursor: pointer;
  }
`;

export default StyledSocialMedias;
