import styled from 'styled-components';
import { useContext } from 'react';
import { ValuationSurveyContext } from 'pages/valuation';
import valuationData from 'src/data/valuationData';

const StyledValuationFormSteps = styled.div`
  //position: absolute;
  //top: 12%;
  width: 100%;
  transition: 0.2s;

  position: relative;
  ${({ theme }) => theme.mq.smallDesktop} {
    top: 0;
  } ;
`;

const StyledStageBar = styled.div`
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.color.lightestGray};
  height: 1rem;
`;

const StageBar = styled.div`
  display: block;
  position: absolute;
  top: 0;
  left: 0;

  border-radius: 1rem;
  background: ${({ theme }) => theme.gradient.blue};
  width: ${({ surveyStep }) => `${((surveyStep + 1) * 100) / valuationData.surveySteps.length}%`};
  height: 1rem;
`;

const StyledBarCaption = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 1rem;
  margin: 0 0.5rem;

  font-family: ${({ theme }) => theme.font.family.myriadPro.bold};
  color: ${({ theme }) => theme.color.gray};
`;

export default function ValuationFormSteps() {
  const { surveyStep } = useContext(ValuationSurveyContext);

  return (
    <StyledValuationFormSteps>
      <StyledStageBar>
        <StageBar surveyStep={surveyStep} />
      </StyledStageBar>
      <StyledBarCaption>
        <p>Etap formularza</p>
        <p>
          {surveyStep + 1}/{valuationData.surveySteps.length}
        </p>
      </StyledBarCaption>
    </StyledValuationFormSteps>
  );
}
