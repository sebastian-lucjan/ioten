import styled from 'styled-components';

export const StyledTextInput = styled.div`
  position: relative;
  margin: 1rem 0;
  width: 100%;
  height: 36px;

  input {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 20px;
    border: none;
    width: 100%;
    border-bottom: 1px black solid;
  }

  label {
    p {
      font-family: ${({ theme }) => theme.font.family.myriadPro.regular};
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
  height: 100%;
  margin-bottom: 2rem;

  textarea {
    border: none;
    width: 100%;
    border-bottom: 1px black solid;
  }
`;

export const StyledSelectInput = styled(StyledTextInput)`
  select {
    border: none;
    width: 100%;
    border-bottom: 1px black solid;
    height: 32px;
  }

  .input-select__title {
  }
`;

export const StyledCheckbox = styled.div`
  height: 32px;
  width: 100%;

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
