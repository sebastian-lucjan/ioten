import BaseLayout from 'src/components/BaseLayout';
import valuationData from 'src/data/valuationData';
import { NextSeo } from 'next-seo';
import Grid from 'src/components/Grid';
import ValuationForm from 'src/components/ValuationForm';
import theme from 'src/assets/styles/theme';
import styled from 'styled-components';
import { createContext, useState } from 'react';
import ValuationFormNav from 'src/components/ValuationForm/ValuationFormNav';
import ValuationFormSteps from 'src/components/ValuationForm/ValuationFormSteps';
import { useForm } from 'react-hook-form';

const initialSurveyContext = { surveyStep: 0, setSurveyStep: () => {} };
export const ValuationSurveyContext = createContext(initialSurveyContext);

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  padding: 40px;
`;

const Valuation = () => {
  const [surveyStep, setSurveyStep] = useState(initialSurveyContext.surveyStep);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const {
    register,
    // handleSubmit,
    // reset,
    watch,
    // formState: { errors, isSubmitting },
  } = useForm();

  const {
    headSection: { title, description },
  } = valuationData;

  const gridColors = { lines: theme.color.blueLight };

  return (
    <ValuationSurveyContext.Provider value={{ surveyStep, setSurveyStep, buttonDisabled, setButtonDisabled }}>
      <NextSeo title={title} description={description} />
      <BaseLayout>
        <Wrapper>
          <ValuationFormSteps />
          <ValuationForm register={register} watch={watch} />
          <ValuationFormNav />
        </Wrapper>
        <Grid colors={gridColors} />
      </BaseLayout>
    </ValuationSurveyContext.Provider>
  );
};

export default Valuation;
