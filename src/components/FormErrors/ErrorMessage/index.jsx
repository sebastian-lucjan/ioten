import { StyledError } from '../FormErrors.styles';

export default function ErrorMessage({ error, index }) {
  return <StyledError index={index}>{error[1].message}</StyledError>;
}
