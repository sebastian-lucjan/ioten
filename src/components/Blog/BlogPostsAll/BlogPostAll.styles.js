import styled from 'styled-components';

export const BlogPostContainer = styled.div`
  ${({ theme }) => theme.mq.tablet} {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    & > button {
      width: 28%;
    }

    & > button:nth-child(1),
    & > button:nth-child(2) {
      width: 45%;
    }

    & > button:nth-child(2) {
      margin-left: 10%;
    }

    & > button:nth-child(n + 4) {
      margin-left: 8%;
    }

    & > button:nth-child(3n) {
      margin-left: 0;
    }
  } ;
`;

export const StyledBlogPostAll = styled.div`
  padding: 40px 40px 100px 40px;

  ${({ theme }) => theme.mq.tablet} {
    padding: 8vw 10vw 10vw 10vw;
  }

  ${({ theme }) => theme.mq.smallDesktop} {
    padding: 5vw 10vw 10vw 10vw;
  }
  ${({ theme }) => theme.mq.mediumDesktop} {
    padding: 10vh 15vw 10vh 15vw;
  }

  ${({ theme }) => theme.mq.hugeDesktop} {
    padding: 10vh 20vw 10vh 20vw;
  }
`;
