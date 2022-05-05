import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormWrapper = styled.div``;

export default function ValuationForm() {
  return (
    <Wrapper>
      <FormWrapper>
        <form>formularz</form>
      </FormWrapper>
    </Wrapper>
  );
}
