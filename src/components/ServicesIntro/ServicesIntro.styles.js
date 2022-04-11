import styled from 'styled-components';

export const Button = styled.button`
  width: 100%;
  height: 64px;
  border: none;
  font-size: ${({ theme }) => theme.font.size.headingSmall};
  font-family: ${({ theme }) => theme.font.family.myriadPro.bold};
  background: ${({ theme }) => theme.gradient.yellow};
  box-shadow: 1.3px 1px 4.1px rgba(0, 0, 0, 0.028), 4.2px 3.4px 13.6px rgba(0, 0, 0, 0.042), 19px 15px 61px rgba(0, 0, 0, 0.07);
`;

export const SectionHeading = styled.p`
  font-size: ${({ theme }) => theme.font.size.headingSection};
  font-family: ${({ theme }) => theme.font.family.myriadPro.bold};
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
  position: relative;
  padding: 100px 40px;

  .services__text-content {
  }
`;

export const ImagePlaceholder = styled.div`
  background-color: lightgray;
  width: 100%;
  height: 40vh;
  margin: 20vh 0 10vh 0;
`;
