import HeadSection from 'src/components/HeadSection';
import BaseLayout from 'src/components/BaseLayout';
import contactData from 'src/data/contactData';

const Contact = () => {
  const {
    headSection: { title, description },
  } = contactData;

  return (
    <>
      <HeadSection title={title} description={description} />
      <BaseLayout>
        <section>Contact</section>
      </BaseLayout>
    </>
  );
};

export default Contact;
