import styled from 'styled-components';
import { MdArrowBackIos } from 'react-icons/md';
import { useContext } from 'react';
import valuationData from 'src/data/valuationData';
import { ValuationSurveyContext } from 'pages/valuation';
import useOnSubmit from 'src/helpers/onSumbit';

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
  background-color: ${({ theme, disabled }) => (disabled ? theme.color.blueLight : theme.color.blue)};
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
  background-color: ${({ theme, disabled }) => (disabled ? theme.color.blueLight : theme.color.blue)};

  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  color: ${({ theme }) => theme.color.white};

  span {
    //icon
    transition: 6s;
    font-size: 2.4rem;
    margin-left: 1rem;
  }

  ${({ theme }) => theme.mq.smallDesktop} {
    &:hover {
      .rocket {
        transform: ${({ disabled }) => (disabled ? 'translate(0, 0)' : 'translate(120vw, -120vh) scale(8)')};
      }
    }
  }
`;

export function SurveySubmitButton() {
  const { buttonDisabled, handleSubmit, watch, reset, isSubmitting } = useContext(ValuationSurveyContext);

  console.log('watch', watch());

  return (
    <StyledSurveySubmitButton
      isSubmitting={isSubmitting}
      disabled={buttonDisabled}
      onClick={handleSubmit(() => useOnSubmit(reset, watch))}
      type="submit"
    >
      {isSubmitting ? (
        <p>Wysyłanie...</p>
      ) : (
        <>
          <p>Wyślij </p>
          <span className="rocket">🚀</span>
        </>
      )}
    </StyledSurveySubmitButton>
  );
}

export function SurveyNextButton() {
  const { surveyStep, setSurveyStep, buttonDisabled } = useContext(ValuationSurveyContext);

  const maxStep = valuationData.surveySteps.length - 1;

  const handleNext = () => {
    if (surveyStep < maxStep) {
      setSurveyStep(surveyStep + 1);
    }
  };

  return (
    <StyledSurveyNextButton onClick={handleNext} type="button" disabled={buttonDisabled} buttonDisabled={buttonDisabled}>
      <p>Dalej</p>
      <MdArrowBackIos />
    </StyledSurveyNextButton>
  );
}

export function SurveyPrevButton() {
  const { surveyStep, setSurveyStep } = useContext(ValuationSurveyContext);

  const handlePrev = () => {
    if (surveyStep > 0) {
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
