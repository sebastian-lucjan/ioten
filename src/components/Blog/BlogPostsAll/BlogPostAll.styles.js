import styled from 'styled-components';

export const BlogPostContainer = styled.div`
  ${({ theme }) => theme.mq.tablet} {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    & > div {
      width: 28%;
    }

    & > div:nth-child(1),
    & > div:nth-child(2) {
      width: 45%;
      .post__image-placeholder {
        height: 300px;
      }
    }
  } ;
`;

export const StyledBlogPostAll = styled.div`
  padding: 100px 40px;

  ${({ theme }) => theme.mq.tablet} {
    padding: 10vw;
  }

  ${({ theme }) => theme.mq.mediumDesktop} {
    padding: 10vw 15vw;
  }

  ${({ theme }) => theme.mq.hugeDesktop} {
    padding: 10vw 20vw;
  }
`;
