import BaseLayout from 'src/components/BaseLayout';
import valuationData from 'src/data/valuationData';
import { NextSeo } from 'next-seo';

const Valuation = () => {
  const {
    headSection: { title, description },
  } = valuationData;

  return (
    <>
      <NextSeo title={title} description={description} />
      <BaseLayout>
        <section>Valuation</section>
      </BaseLayout>
    </>
  );
};

export default Valuation;
