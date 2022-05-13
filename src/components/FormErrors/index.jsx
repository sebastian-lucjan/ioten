import { v4 as uuid } from 'uuid';
import { ErrorsContainer, Wrapper } from './FormErrors.styles';
import ErrorMessage from './ErrorMessage';

export default function FormErrors({ errors }) {
  return (
    <Wrapper hasError>
      <ErrorsContainer>
        {Object.entries(errors).map((error, index) => (
          <ErrorMessage key={uuid()} error={error} index={index} />
        ))}
      </ErrorsContainer>
    </Wrapper>
  );
}
