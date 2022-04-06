import styled from 'styled-components';

export const StyledBlogHeader = styled.div`
  padding: 100px 40px;

  .blog-header__category {
    color: ${({ theme }) => theme.color.darkerGray};
  }

  .blog-header__heading {
    font-size: ${({ theme }) => theme.font.size.headingSection};
    font-family: ${({ theme }) => theme.font.family.myriadPro.bold};
    font-weight: 100;
    color: ${({ theme }) => theme.color.black};
  }
`;
