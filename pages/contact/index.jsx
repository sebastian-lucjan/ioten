import HeadSection from 'src/components/HeadSection';
import BaseLayout from 'src/components/BaseLayout';
import contactData from 'src/data/contactData';
import ContactMainView from 'src/components/ContactMainView';
import BriefShortInterlude from 'src/components/BriefShortInterlude';

const Contact = () => {
  const {
    headSection: { title, description },
  } = contactData;

  return (
    <>
      <HeadSection title={title} description={description} />
      <BaseLayout>
        <ContactMainView />
        <BriefShortInterlude />
      </BaseLayout>
    </>
  );
};

export default Contact;
