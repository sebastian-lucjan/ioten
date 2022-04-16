import styled from 'styled-components';

export const StyledBlogHeader = styled.div`
  padding: 100px 40px 40px 40px;

  .blog-header__category {
    color: ${({ theme }) => theme.color.darkerGray};
  }

  .blog-header__heading {
    font-size: ${({ theme }) => theme.font.size.headingSection};
    font-family: ${({ theme }) => theme.font.family.myriadPro.bold};
    font-weight: 100;
    color: ${({ theme }) => theme.color.black};
  }

  ${({ theme }) => theme.mq.tablet} {
    padding: 10vw 10vw 0 10vw;

    .blog-header__heading {
      width: 70%;
    }
  }

  ${({ theme }) => theme.mq.mediumDesktop} {
    padding: 10vw 15vw;
  }

  ${({ theme }) => theme.mq.bigDesktop} {
    .blog-header__heading {
      width: 60%;
    }
  }

  ${({ theme }) => theme.mq.hugeDesktop} {
    padding: 10vw 20vw;
  }
`;
