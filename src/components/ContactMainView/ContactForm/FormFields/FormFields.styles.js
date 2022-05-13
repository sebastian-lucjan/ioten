import styled from 'styled-components';

export const StyledTextInput = styled.div`
  position: relative;
  margin: 1rem 0;
  width: 100%;
  height: 36px;

  input:focus ~ p {
    color: gray;
    transform: scale(0.7);
    transform-origin: top left;
  }

  p {
    transition: 0.4s;
    color: ${({ notEmpty }) => (notEmpty ? 'gray' : 'black')};
    transform: ${({ notEmpty }) => (notEmpty ? 'scale(0.7)' : 'scale(1)')};
    transform-origin: top left;
  }

  input {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 20px;
    border: none;
    width: 100%;
    border-bottom: 1px ${({ theme }) => theme.color.black} solid;
  }

  label {
    p {
      font-family: ${({ theme, required }) => (required ? theme.font.family.myriadPro.bold : theme.font.family.myriadPro.regular)};
      position: absolute;
      top: 0;
      left: 0;

      &:after {
        content: '*';
        display: ${({ required }) => (required ? 'block' : 'none')};

        position: absolute;
        top: -2px;
        right: -6px;
      }
    }
    font-size: ${({ theme }) => theme.font.size.smallText};
  }
`;

export const StyledTextAreaInput = styled(StyledTextInput)`
  position: relative;
  height: unset;
  margin-bottom: 2rem;

  label {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
  }

  textarea {
    border: none;
    padding: 1rem;
    width: 100%;
    border-bottom: 1px ${({ theme }) => theme.color.black} solid;
    resize: vertical;
  }

  textarea:focus ~ p {
    color: gray;
    transform: scale(0.7);
    transform-origin: top left;
  }

  p {
    transition: 0.4s;
    color: ${({ notEmpty }) => (notEmpty ? 'gray' : 'black')};
    transform: ${({ notEmpty }) => (notEmpty ? 'scale(0.7)' : 'scale(1)')};
    transform-origin: top left;
  }

  ${({ theme }) => theme.mq.smallDesktop} {
    width: 100%;

    &:nth-child(2n + 1) {
      margin-right: 0;
    }
  }
`;

export const StyledCheckbox = styled.div`
  height: 32px;
  width: 100%;
  margin-bottom: 1rem;

  label {
    display: flex;
  }

  p {
    position: relative;
    display: block;
    margin-left: 1rem;
    line-height: 16px;

    &:after {
      content: '*';
      display: ${({ required }) => (required ? 'block' : 'none')};

      position: absolute;
      top: -2px;
      right: -6px;

      font-size: ${({ theme }) => theme.font.size.smallText};
    }
  }
`;

// export const StyledSelectInput = styled(StyledTextInput)`
//   select {
//     border: none;
//     width: 100%;
//     border-bottom: 1px ${({ theme }) => theme.color.black} solid;
//     height: 32px;
//   }
// `;
