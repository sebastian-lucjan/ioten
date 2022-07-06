import contactData from 'src/data/contactData';
import theme from 'src/assets/styles/theme';
import PaperPlaneSVG from 'src/assets/images/paper-plane';
import { useRef } from 'react';
import { StyledSubmitButton } from './SubmitButton.styles';

export default function SubmitButton({ hasError, loading, isSubmitSuccessful, isToken }) {
  const buttonInitialText = contactData.contactContent.form.button;
  const paperPlaneRef = useRef(null);
  const buttonRef = useRef(null);

  const { white, darkestGray } = theme.color;

  return (
    <StyledSubmitButton
      ref={buttonRef}
      isSubmitSuccessful={isSubmitSuccessful}
      hasError={hasError}
      isLoading={loading}
      type="submit"
      title={buttonInitialText}
      textColor={white}
      backgroundColor={darkestGray}
    >
      <p>{loading && isToken ? 'Wysyłanie...' : buttonInitialText}</p>

      {isSubmitSuccessful ? null : <PaperPlaneSVG setRef={paperPlaneRef} />}
    </StyledSubmitButton>
  );
}
