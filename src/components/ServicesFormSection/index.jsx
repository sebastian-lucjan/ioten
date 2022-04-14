import Grid from 'src/components/Grid';
import theme from 'src/assets/styles/theme';
import FormIntro from './FormIntro';
import ServicesForm from './ServicesForm';
import MainSectionWrapper from '../MainSectionWrapper/MainSectionWrapper.styles';
import { StyledServicesForm } from './ServicesFormSection.styles';

export default function ServicesFormSection() {
  return (
    <MainSectionWrapper background={theme.gradient.yellow}>
      <StyledServicesForm>
        <FormIntro />
        <ServicesForm />
      </StyledServicesForm>
      <Grid colors={{ lines: theme.color.yellow }} />
    </MainSectionWrapper>
  );
}
