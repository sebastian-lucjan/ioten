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
import ValuationFormSuccess from 'src/components/ValuationFormSuccess';

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

  // const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    trigger,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm();

  const {
    headSection: { title, description },
    surveySteps,
  } = valuationData;

  const optionsArray = surveySteps[surveyStep].options.map((option) => option.name);

  // check if questions options are selected by checking if the watch function is returning a value
  useEffect(() => {
    const result = !optionsArray.some((option) => {
      return watch()[option];
    });
    setButtonDisabled(result);

    if (!surveySteps[surveyStep].required) {
      setButtonDisabled(false);
    }
  }, [watch, surveyStep, optionsArray, errors]); // todo: check if this is necessary

  const gridColors = { lines: theme.color.blueLight };

  return (
    <ValuationSurveyContext.Provider
      value={{
        surveyStep,
        setSurveyStep,
        buttonDisabled,
        setButtonDisabled,
        handleSubmit,
        register,
        reset,
        errors,
        watch,
        trigger,
        isSubmitting,
      }}
    >
      <NextSeo title={title} description={description} />
      <BaseLayout>
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
//   { text: 'Strona firmowa o kilku zakładkach', type: 'checkbox', name: 'wwwWithTabs' },
//   { text: 'Strona o rozbudowanej strukturze i funkcjonalnościach', type: 'checkbox', name: 'wwwWithFunctions' },
//   { text: 'Strona produktowa - zaawansowana strona wizualna', type: 'checkbox', name: 'wwwProduct' },
//   { text: 'Inna usługa', type: 'checkbox', name: 'otherPage' },
// ],
//   required: true,
// },
