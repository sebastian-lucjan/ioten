import styled from 'styled-components';
import { useContext } from 'react';
import { ValuationSurveyContext } from 'pages/valuation';
import ValuationFormSuccess from '../ValuationFormSuccess';
import ValuationFormSteps from '../ValuationForm/ValuationFormSteps';
import ValuationForm from '../ValuationForm';
import ValuationFormNav from '../ValuationForm/ValuationFormNav';

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  margin: 0 40px;

  ${({ theme }) => theme.mq.tablet} {
    height: 70vh;
    margin: 20%;
  }

  ${({ theme }) => theme.mq.smallDesktop} {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100vw;
    margin: unset;
    padding: 80px 30vw 0 30vw;
    height: 100vh;
  }
`;

export default function ValuationView() {
  const { isSubmitSuccessful } = useContext(ValuationSurveyContext);

  return (
    <Wrapper>
      {isSubmitSuccessful ? (
        <ValuationFormSuccess />
      ) : (
        <>
          <ValuationFormSteps />
          <ValuationForm />
          <ValuationFormNav />
        </>
      )}
    </Wrapper>
  );
}
