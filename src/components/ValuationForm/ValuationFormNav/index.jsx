import { useContext } from 'react';
import styled from 'styled-components';
import { ValuationSurveyContext } from 'pages/valuation';
import valuationData from 'src/data/valuationData';
import { SurveyNextButton, SurveyPrevButton, SurveySubmitButton } from './SurveyButton';

const StyledValuationFormNav = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${({ surveyStep }) => (surveyStep === valuationData.surveySteps.length - 1 ? 'space-between' : 'space-between')};
  align-items: center;
  width: 100%;
  //height: 22%;
  //top: 80%;
  //background-color: yellowgreen;
  font-family: ${({ theme }) => theme.font.family.myriadPro.bold};
  font-size: ${({ theme }) => theme.font.size.paragraphSmall};

  ${({ theme }) => theme.mq.smallDesktop} {
    position: relative;
    top: unset;
  } ;
`;

export default function ValuationFormNav() {
  const { surveyStep } = useContext(ValuationSurveyContext);

  return (
    <StyledValuationFormNav surveyStep={surveyStep}>
      {surveyStep === valuationData.surveySteps.length - 1 ? <SurveySubmitButton /> : null}
      {surveyStep !== valuationData.surveySteps.length - 1 ? <SurveyNextButton /> : null}
      {surveyStep !== 0 ? <SurveyPrevButton /> : null}
    </StyledValuationFormNav>
  );
}
