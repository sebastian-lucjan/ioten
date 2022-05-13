import styled from 'styled-components';
import { MdArrowBackIos } from 'react-icons/md';
import { useContext } from 'react';
import valuationData from 'src/data/valuationData';
import { ValuationSurveyContext } from 'pages/valuation';
import onSubmit from 'src/helpers/onSumbit';

const SurveyButton = styled.button`
  display: flex;
  justify-content: center;
  width: 60%;

  height: 4rem;
  line-height: 4rem;
  border: none;
  border-radius: 0.4rem;

  svg {
    display: block;
    font-size: 2rem;
    margin: 0.8rem 0;
  }
`;

const StyledSurveyNextButton = styled(SurveyButton)`
  color: ${({ theme }) => theme.color.white};
  background: ${({ theme, disabled }) => (disabled ? theme.color.blueLight : theme.gradient.blue)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  svg {
    transform: scaleX(-1);
  }
`;

const StyledSurveyPrevButton = styled(SurveyButton)`
  background-color: unset;
  color: ${({ theme }) => theme.color.darkGray};
`;

const StyledSurveySubmitButton = styled(SurveyButton)`
  background: ${({ theme, disabled }) => (disabled ? theme.color.blueLight : theme.gradient.blue)};

  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  color: ${({ theme }) => theme.color.white};

  span {
    //icon
    transition: 3s;
    font-size: 2.4rem;
    margin-left: 1rem;
  }

  .rocket-start {
    transform: ${({ disabled }) => (disabled ? 'translate(0, 0)' : 'translate(120vw, -120vh) scale(8)')};
  }
`;

export function SurveySubmitButton() {
  const { buttonDisabled, handleSubmit, watch, reset, isSubmitting } = useContext(ValuationSurveyContext);

  // console.log('watch', watch());

  return (
    <StyledSurveySubmitButton
      isSubmitting={isSubmitting}
      disabled={buttonDisabled}
      onClick={handleSubmit(() => onSubmit(reset, watch))}
      type="submit"
    >
      {isSubmitting ? (
        <>
          <p>Wysyłanie...</p>
          <span className="rocket-start">🚀</span>
        </>
      ) : (
        <>
          <p>Wyślij </p>
          <span>🚀</span>
        </>
      )}
    </StyledSurveySubmitButton>
  );
}

export function SurveyNextButton() {
  const { surveyStep, setSurveyStep, buttonDisabled, trigger, errors } = useContext(ValuationSurveyContext);

  const maxStep = valuationData.surveySteps.length - 1;

  const handleNext = async () => {
    await trigger(valuationData.surveySteps[surveyStep].options[0].name);

    // go to next step if there are no errors and this is not last step
    if (surveyStep < maxStep && Object.keys(errors).length === 0) {
      setSurveyStep(surveyStep + 1);
    }
  };

  return (
    <StyledSurveyNextButton onClick={handleNext} type="button" disabled={buttonDisabled}>
      <p>Dalej</p>
      <MdArrowBackIos />
    </StyledSurveyNextButton>
  );
}

export function SurveyPrevButton() {
  const { surveyStep, setSurveyStep, errors } = useContext(ValuationSurveyContext);

  const handlePrev = () => {
    if (surveyStep > 0 && Object.keys(errors).length === 0) {
      setSurveyStep(surveyStep - 1);
    }
  };

  return (
    <StyledSurveyPrevButton onClick={handlePrev} type="button">
      <MdArrowBackIos />
      <p>Wróć</p>
    </StyledSurveyPrevButton>
  );
}
