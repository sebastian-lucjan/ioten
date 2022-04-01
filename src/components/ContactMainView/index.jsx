import Grid from 'src/components/Grid';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

export default function ContactMainView() {
  return (
    <section>
      <ContactInfo />
      <ContactForm />
      <Grid />
    </section>
  );
}
