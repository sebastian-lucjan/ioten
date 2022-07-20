import styled from 'styled-components';
import { useContext } from 'react';
import { ValuationSurveyContext } from 'pages/valuation';
import FormStep from './ValuationFormSteps/FormStep';

const Wrapper = styled.div`
  width: 100%;
  height: 70%;

  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;

  ${({ theme }) => theme.mq.mediumMobile} {
    margin: 1rem 0 0 0;
  }

  ${({ theme }) => theme.mq.tablet} {
    margin: 3rem 0 0 0;
  }

  ${({ theme }) => theme.mq.smallDesktop} {
    position: relative;
    top: 0;
    height: 60%;
    margin: 4rem 0;
  } ;
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const FormError = styled.div`
  color: ${({ theme }) => theme.color.red};
  font-size: ${({ theme }) => theme.font.size.caption};
  font-family: ${({ theme }) => theme.font.family.myriadPro.bold};
`;

export default function ValuationForm() {
  const { surveyStep, watch, register, errors } = useContext(ValuationSurveyContext);
  const isError = () => Object.keys(errors).length > 0;

  return (
    <Wrapper>
      <FormWrapper>
        <FormStep watch={watch} register={register} surveyStep={surveyStep} />
        {isError() ? <FormError>{Object.values(errors)[0].message}</FormError> : null}
      </FormWrapper>
    </Wrapper>
  );
}
