import styled from 'styled-components';
import { v4 as uuid } from 'uuid';

const Wrapper = styled.div`
  //left: 0;
  //display: flex;
  //height: 100%;
  //width: 100%;
  width: calc(100vw - 80px);
  margin-top: 2rem;
  justify-content: center;
  align-items: center;
  z-index: ${({ theme }) => theme.zIndex.peak};
  box-shadow: 4px 4px 0 ${({ hasError }) => (hasError ? 'hsla(0, 84%, 52%, 60%)' : `#0008`)};

  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.font.size.paragraph};
    width: calc(50% - 20px);
    margin: 1rem 0;
  }

  ${({ theme }) => theme.mq.smallDesktop} {
    font-size: ${({ theme }) => theme.font.size.paragraphSmall};
    width: 100%;
    box-shadow: 4px 4px 0 ${({ hasError }) => (hasError ? 'hsla(0, 84%, 52%, 60%)' : `#0008`)};
  }

  ${({ theme }) => theme.mq.desktop} {
    position: absolute;
    right: 40px;
    //transform: translate(120%, -168px);
    //top: 50%;
    width: calc(50% - 50px);
    font-size: ${({ theme }) => theme.font.size.headingSmall};
  }

  ${({ theme }) => theme.mq.hugeDesktop} {
    font-size: ${({ theme }) => theme.font.size.headingSmall};
  }
`;

const StyledError = styled.div`
  &:not(:first-child) {
    border-top: 2px dotted ${({ theme }) => theme.color.white};
    //opacity: 0.5;
    margin-top: 1rem;
    padding-top: 1rem;
  }
`;

function ErrorMessage({ error, index }) {
  return <StyledError index={index}>{error[1].message}</StyledError>;
}

const ErrorsContainer = styled.div`
  //height: 100vh;
  background-color: ${({ theme }) => theme.color.red};
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.font.size.smallText};
  //width: 80%;
  padding: 2rem;
`;

export default function FormErrors({ errors }) {
  console.log(Object.entries(errors));

  return (
    <Wrapper hasError>
      <ErrorsContainer>
        {Object.entries(errors).map((error, index) => (
          <ErrorMessage key={uuid()} error={error} index={index} />
        ))}
      </ErrorsContainer>
    </Wrapper>
  );
}
