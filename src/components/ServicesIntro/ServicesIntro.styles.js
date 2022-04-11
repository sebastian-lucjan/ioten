import styled from 'styled-components';

export const Button = styled.button`
  width: 100%;
  height: 64px;
  border: none;
  font-size: ${({ theme }) => theme.font.size.headingSmall};
  font-family: ${({ theme }) => theme.font.family.myriadPro.bold};
  background: ${({ theme }) => theme.gradient.yellow};
  box-shadow: 1.3px 1px 4.1px rgba(0, 0, 0, 0.028), 4.2px 3.4px 13.6px rgba(0, 0, 0, 0.042), 19px 15px 61px rgba(0, 0, 0, 0.07);

  ${({ theme }) => theme.mq.smallDesktop} {
    width: 400px;
  } ;
`;

export const SectionHeading = styled.p`
  font-size: ${({ theme }) => theme.font.size.headingSection};
  font-family: ${({ theme }) => theme.font.family.myriadPro.bold};

  ${({ theme }) => theme.mq.hugeDesktop} {
    font-size: ${({ theme }) => theme.font.size.headingPage};
  }
`;
export const SectionParagraphs = styled.p`
  margin-bottom: 2rem;
  font-size: ${({ theme }) => theme.font.size.paragraphSmall};
  font-family: ${({ theme }) => theme.font.family.myriadPro.light};
`;

export const ProsList = styled.ul`
  list-style: none;
  font-size: ${({ theme }) => theme.font.size.smallText};
  font-family: ${({ theme }) => theme.font.family.myriadPro.regular};
  font-weight: 800;

  li {
    display: flex;
    margin-bottom: 2rem;

    div {
      margin-right: 1rem;

      svg {
        color: ${({ theme }) => theme.color.green};
        height: 2rem;
        width: 2rem;
      }
    }
    p {
      line-height: 20px;
    }
  }
`;

export const Wrapper = styled.div`
  padding: 40px 40px;

  ${({ theme }) => theme.mq.tablet} {
    padding: 0 100px;
  }

  .services__text-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;

    & > div,
    & > ul,
    button {
      margin: 20px 0;
    }
  }

  ${({ theme }) => theme.mq.smallDesktop} {
    display: flex;
    justify-content: space-between;

    .services__text-content {
      width: 50%;
      padding-right: 20px;

      & > div,
      & > ul,
      button {
        margin: 6px 0;
      }
    }

    .services__image-container {
      padding: 80px 40px;
      width: 50%;
    }
  }

  ${({ theme }) => theme.mq.mediumDesktop} {
    .services__text-content {
      padding-right: 60px;
    }

    .services__image-container {
      padding-left: 60px;
    }
  }

  ${({ theme }) => theme.mq.bigDesktop} {
    .services__text-content {
      padding-right: 80px;
    }

    .services__image-container {
      padding-left: 80px;
    }
  }

  ${({ theme }) => theme.mq.hugeDesktop} {
    padding: 0 180px;

    .services__text-content {
      & > div,
      & > ul {
        margin-bottom: 20px;
      }
      padding-right: 180px;
    }

    .services__image-container {
      padding-left: 120px;
    }
  } ;
`;

export const ImagePlaceholder = styled.div`
  background-color: lightgray;
  width: 100%;
  height: 40vh;
  margin: 10vh 0 10vh 0;

  ${({ theme }) => theme.mq.tablet} {
    margin: 10vh 0 10vh 0;
  } //todo: if won't change, delete.

  ${({ theme }) => theme.mq.smallDesktop} {
    height: 62vh;
  } ;
`;
