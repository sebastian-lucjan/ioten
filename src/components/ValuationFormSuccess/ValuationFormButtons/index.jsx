import { useContext } from 'react';
import { ValuationSurveyContext } from 'pages/valuation';
import { StyledGoHomeButton, StyledRestartValuationFormButton } from './ValuationFormButtons.styles';

export function GoHomeButton() {
  return <StyledGoHomeButton type="button">Wróć do strony głównej</StyledGoHomeButton>;
}

export function RestartValuationFormButton() {
  const { setSurveyStep, reset } = useContext(ValuationSurveyContext);

  const handleRestartValuationFormButton = () => {
    reset();
    setSurveyStep(0);
  };

  return (
    <StyledRestartValuationFormButton onClick={handleRestartValuationFormButton} type="button">
      Uzupełnij jeszcze raz formularz
    </StyledRestartValuationFormButton>
  );
}
