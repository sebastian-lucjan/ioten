import BaseLayout from 'src/components/BaseLayout';
import valuationData from 'src/data/valuationData';
import { NextSeo } from 'next-seo';
import Grid from 'src/components/Grid';
import theme from 'src/assets/styles/theme';
import { createContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import ValuationView from 'src/components/ValuationView';

const initialSurveyContext = { surveyStep: 0, setSurveyStep: () => {} };
export const ValuationSurveyContext = createContext(initialSurveyContext);

const Valuation = () => {
  const [surveyStep, setSurveyStep] = useState(initialSurveyContext.surveyStep);
  const [buttonDisabled, setButtonDisabled] = useState(true);

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

  const gridColors = { lines: theme.color.blueLight, innerLines: theme.gradient.blueToTransparent };

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
        isSubmitSuccessful,
      }}
    >
      <NextSeo title={title} description={description} />
      <BaseLayout>
        <ValuationView />
        <Grid colors={gridColors} />
      </BaseLayout>
    </ValuationSurveyContext.Provider>
  );
};

export default Valuation;
