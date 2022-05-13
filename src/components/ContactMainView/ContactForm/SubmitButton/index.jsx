import contactData from 'src/data/contactData';
import theme from 'src/assets/styles/theme';
import PaperPlaneSVG from 'src/assets/images/paper-plane';
import { useRef } from 'react';
import { StyledSubmitButton } from './SubmitButton.styles';

export default function SubmitButton({ hasError, loading, isSubmitSuccessful }) {
  const buttonText = contactData.contactContent.form.button;
  const paperPlaneRef = useRef(null);

  const { white, darkestGray } = theme.color;

  return (
    <StyledSubmitButton
      isSubmitSuccessful={isSubmitSuccessful}
      hasError={hasError}
      isLoading={loading}
      type="submit"
      title={buttonText}
      textColor={white}
      backgroundColor={darkestGray}
    >
      <p>{loading ? 'Wysyłanie...' : buttonText}</p>

      {isSubmitSuccessful ? null : <PaperPlaneSVG setRef={paperPlaneRef} />}
    </StyledSubmitButton>
  );
}
