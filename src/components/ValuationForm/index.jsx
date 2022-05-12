import styled from 'styled-components';
import { useContext } from 'react';
import { ValuationSurveyContext } from 'pages/valuation';
import FormStep from './ValuationFormSteps/FormStep';

const Wrapper = styled.div`
  position: absolute;
  top: 22%;
  width: calc(100% - 80px);
  height: 55%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormWrapper = styled.form`
  display: flex;
  width: 100%;
  height: 100%;
`;

export default function ValuationForm({ watch, register }) {
  const { surveyStep } = useContext(ValuationSurveyContext);

  return (
    <Wrapper>
      <FormWrapper>
        <FormStep watch={watch} register={register} surveyStep={surveyStep} />
      </FormWrapper>
    </Wrapper>
  );
}
