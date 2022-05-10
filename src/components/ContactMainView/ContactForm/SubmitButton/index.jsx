import contactData from 'src/data/contactData';
import theme from 'src/assets/styles/theme';
import { StyledSubmitButton } from './SubmitButton.styles';

export default function SubmitButton({ hasError, loading }) {
  const buttonText = contactData.contactContent.form.button;

  const { white, darkestGray } = theme.color;

  return (
    <StyledSubmitButton hasError={hasError} isLoading={loading} type="submit" title={buttonText} textColor={white} backgroundColor={darkestGray}>
      {loading ? 'Wysyłanie...' : buttonText}
    </StyledSubmitButton>
  );
}
