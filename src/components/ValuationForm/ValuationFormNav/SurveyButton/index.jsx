import styled from 'styled-components';
import { MdArrowBackIos } from 'react-icons/md';
import { useContext } from 'react';
import valuationData from 'src/data/valuationData';
import { ValuationSurveyContext } from 'pages/valuation';
import { onSubmit } from '../../../../helpers/valuationServices';

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

  // &:hover {
  //   background-color: ${({ theme }) => theme.color.blue}; //todo: change to darker blue, set in theme
  // }
`;

const StyledSurveyPrevButton = styled(SurveyButton)`
  background-color: unset;
  color: ${({ theme }) => theme.color.darkGray};
`;

const StyledSurveySubmitButton = styled(SurveyButton)`
  background-color: ${({ theme }) => theme.color.blue};
  background-color: ${({ theme, disabled }) => (disabled ? theme.color.blueLight : theme.color.blue)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  color: ${({ theme }) => theme.color.white};
`;

export function SurveySubmitButton() {
  const { buttonDisabled, handleSubmit, watch, reset } = useContext(ValuationSurveyContext);

  console.log('watch', watch());

  return (
    <StyledSurveySubmitButton disabled={buttonDisabled} onClick={handleSubmit(() => onSubmit(reset, watch))} type="submit">
      <p>Wyślij</p>
      <span>🚀</span>
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
