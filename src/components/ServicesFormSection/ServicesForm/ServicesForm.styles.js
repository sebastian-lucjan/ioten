import styled from 'styled-components';

export const FormDuel = styled.div`
  ${({ theme }) => theme.mq.tablet} {
    display: flex;
    justify-content: space-between;

    label {
      display: block;
      width: calc(50% - 10px);
    }
  } ;
`;

export const Wrapper = styled.div``;

export const StyledServicesForm = styled.div`
  position: relative;

  ${({ theme }) => theme.mq.smallDesktop} {
    width: calc(50% - 20px);
  }
`;

export const StyledTextInputWrapper = styled.label`
  font-size: ${({ theme }) => theme.font.size.paragraphSmall};
  color: ${({ theme }) => theme.color.black};

  input {
    padding: 0 1rem;
    margin: 1rem 0 2rem 0;
    width: 100%;
    height: 32px;
    border: none;
  }

  p {
    font-size: ${({ theme }) => theme.font.size.paragraphSmall};
    font-family: ${({ theme }) => theme.font.family.myriadPro.regular};
    color: ${({ theme }) => theme.color.black};
    font-weight: 800;

    ${({ theme }) => theme.mq.smallDesktop} {
      font-size: ${({ theme }) => theme.font.size.smallText};
    }

    ${({ theme }) => theme.mq.desktop} {
      font-size: ${({ theme }) => theme.font.size.paragraphSmall};
    }
  }
`;

export const StyledTextAreaWrapper = styled.label`
  font-size: ${({ theme }) => theme.font.size.paragraphSmall};
  color: ${({ theme }) => theme.color.black};

  textarea {
    padding: 1rem;
    margin: 1rem 0 2rem 0;
    width: 100%;
    height: 160px;
    border: none;
    resize: vertical;
  }

  p {
    font-family: ${({ theme }) => theme.font.family.myriadPro.regular};
    font-weight: 800;
  }
`;
