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
      <NextSeo title={title} description={description} canonical={canonical} openGraph={ogData} noindex nofollow />

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
