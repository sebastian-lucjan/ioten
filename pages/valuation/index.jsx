import BaseLayout from 'src/components/BaseLayout';
import valuationData from 'src/data/valuationData';
import { NextSeo } from 'next-seo';
import Grid from 'src/components/Grid';
import ValuationForm from 'src/components/ValuationForm';
import theme from 'src/assets/styles/theme';
import styled from 'styled-components';
import { createContext, useEffect, useState } from 'react';
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
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const {
    register,
    // handleSubmit,
    // reset,
    watch,
    // formState: { errors, isSubmitting },
  } = useForm();

  const {
    headSection: { title, description },
    surveySteps,
  } = valuationData;

  const optionsArray = surveySteps[surveyStep].options.map((option) => option.name);

  // check if questions options are selected by checking if
  useEffect(() => {
    const result = !optionsArray.some((option) => watch()[option]);
    setButtonDisabled(result);
    if (!surveySteps[surveyStep].required) {
      setButtonDisabled(false);
    }
  }, [watch, surveyStep, optionsArray]);

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

// {
//   heading: 'Jakie usługi Cię interesują?',
//     description: 'Wybierz co najmniej jedną opcję',
//   options: [
//   { text: 'Strona wizytówka (one page) / Landingpage', type: 'checkbox', name: 'landingpage' },
//   { text: 'Strona firmowa o kilku zakładkach', type: 'checkbox', name: 'www-with-tabs' },
//   { text: 'Strona o rozbudowanej strukturze i funkcjonalnościach', type: 'checkbox', name: 'www-with-functions' },
//   { text: 'Strona produktowa - zaawansowana strona wizualna', type: 'checkbox', name: 'www-product' },
//   { text: 'Inna usługa', type: 'checkbox', name: 'other-page' },
// ],
//   required: true,
// },
