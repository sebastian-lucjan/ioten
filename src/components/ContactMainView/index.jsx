import Grid from 'src/components/Grid';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import Wrapper from './ContactMainView.styles';

export default function ContactMainView({ colors }) {
  return (
    <Wrapper>
      <ContactInfo />
      <ContactForm />
      <Grid colors={colors} />
    </Wrapper>
  );
}
