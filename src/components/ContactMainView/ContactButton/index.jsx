import StyledButton from './StyledButton';

export default function ContactButton({ title, textColor, backgroundColor }) {
  return (
    <StyledButton textColor={textColor} backgroundColor={backgroundColor} type="button">
      {title}
    </StyledButton>
  );
}
