import styled from 'styled-components';
import { MdArrowBackIos } from 'react-icons/md';
import { useContext } from 'react';
import { ValuationSurveyContext } from '../../../../../pages/valuation';
import valuationData from '../../../../data/valuationData';

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
  background-color: ${({ theme }) => theme.color.green};

  svg {
    transform: scaleX(-1);
  }

  &:hover {
    background-color: ${({ theme }) => theme.color.greenDark};
  }
`;

const StyledSurveyPrevButton = styled(SurveyButton)`
  background-color: unset;
  color: ${({ theme }) => theme.color.darkGray};
`;

export function SurveyNextButton() {
  const { surveyStep, setSurveyStep } = useContext(ValuationSurveyContext);

  const maxStep = valuationData.surveySteps.length - 1;

  const handleNext = () => {
    if (surveyStep < maxStep) {
      setSurveyStep(surveyStep + 1);
    }
  };

  return (
    <StyledSurveyNextButton onClick={handleNext} type="button">
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
