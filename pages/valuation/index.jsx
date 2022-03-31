import HeadSection from 'src/components/HeadSection';
import BaseLayout from 'src/components/BaseLayout';
import valuationData from 'src/data/valuationData';

const Valuation = () => {
  const {
    headSection: { title, description },
  } = valuationData;

  return (
    <>
      <HeadSection title={title} description={description} />
      <BaseLayout>
        <section>Valuation</section>
      </BaseLayout>
    </>
  );
};

export default Valuation;
