import BaseLayout from 'src/components/BaseLayout';
import valuationData from 'src/data/valuationData';
import { NextSeo } from 'next-seo';
import Grid from 'src/components/Grid';
import ValuationForm from 'src/components/ValuationForm';

const Valuation = () => {
  const {
    headSection: { title, description },
  } = valuationData;

  return (
    <>
      <NextSeo title={title} description={description} />
      <BaseLayout>
        <ValuationForm />
        <Grid />
      </BaseLayout>
    </>
  );
};

export default Valuation;
