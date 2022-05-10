import { useContext } from 'react';
import styled from 'styled-components';
import { ValuationSurveyContext } from 'pages/valuation';
import valuationData from 'src/data/valuationData';
import { SurveyNextButton, SurveyPrevButton } from './SurveyButton';

const StyledValuationFormNav = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: ${({ surveyStep }) => (surveyStep === valuationData.surveySteps.length - 1 ? 'flex-end' : 'space-between')};
  align-items: center;
  width: calc(100% - 80px);
  height: calc(20% - 40px);
  top: 80%;
  font-family: ${({ theme }) => theme.font.family.myriadPro.bold};
  font-size: ${({ theme }) => theme.font.size.paragraphSmall};
`;

export default function ValuationFormNav() {
  const { surveyStep } = useContext(ValuationSurveyContext);

  return (
    <StyledValuationFormNav surveyStep={surveyStep}>
      {surveyStep !== valuationData.surveySteps.length - 1 ? <SurveyNextButton /> : null}
      {surveyStep !== 0 ? <SurveyPrevButton /> : null}
    </StyledValuationFormNav>
  );
}
