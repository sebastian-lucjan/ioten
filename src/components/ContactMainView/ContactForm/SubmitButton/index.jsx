import contactData from 'src/data/contactData';
import theme from 'src/assets/styles/theme';
import { StyledSubmitButton } from './SubmitButton.styles';

export default function SubmitButton({ hasError }) {
  const buttonText = contactData.contactContent.form.button;

  const { white, darkestGray } = theme.color;

  return (
    <StyledSubmitButton hasError={hasError} type="submit" title={buttonText} textColor={white} backgroundColor={darkestGray}>
      {buttonText}
    </StyledSubmitButton>
  );
}
