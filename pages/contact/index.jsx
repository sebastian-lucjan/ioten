import BaseLayout from 'src/components/BaseLayout';
import contactData from 'src/data/contactData';
import BriefShortInterlude from 'src/components/BriefShortInterlude';
import theme from 'src/assets/styles/theme';
import { NextSeo } from 'next-seo';
import ContactInfo from 'src/components/ContactMainView/ContactInfo';
import ContactForm from 'src/components/ContactMainView/ContactForm';
import Grid from 'src/components/Grid';
import Wrapper from 'src/components/ContactMainView/ContactMainView.styles';

const Contact = () => {
  const { title, description, ogData, canonical } = contactData;

  return (
    <>
      <NextSeo title={title} description={description} canonical={canonical} openGraph={ogData} />
      {/* <link rel="preconnect" href="https://fonts.googleapis.com" /> */}
      {/* <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin /> */}
      {/* <link href="https://fonts.googleapis.com/css2?family=Alata&display=swap" rel="stylesheet" /> */}

      <BaseLayout footerGridColor={theme.gradient.grayToBlack}>
        <Wrapper>
          <ContactInfo />
          <ContactForm />
          <Grid colors={{ lines: theme.gradient.blackToGray, innerLines: theme.gradient.blackToTransparent }} />
        </Wrapper>
        <BriefShortInterlude />
      </BaseLayout>
    </>
  );
};

export default Contact;
