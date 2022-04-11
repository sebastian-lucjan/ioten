import HeadSection from 'src/components/HeadSection';
import BaseLayout from 'src/components/BaseLayout';
import contactData from 'src/data/contactData';
import ContactMainView from 'src/components/ContactMainView';
import BriefShortInterlude from 'src/components/BriefShortInterlude';
import theme from 'src/assets/styles/theme';

const Contact = () => {
  const {
    headSection: { title, description },
  } = contactData;

  return (
    <>
      <HeadSection title={title} description={description} />
      <BaseLayout footerGridColor={theme.gradient.grayToBlack}>
        <ContactMainView colors={{ lines: theme.gradient.blackToGray, innerLines: theme.gradient.blackToTransparent }} />
        <BriefShortInterlude />
      </BaseLayout>
    </>
  );
};

export default Contact;
