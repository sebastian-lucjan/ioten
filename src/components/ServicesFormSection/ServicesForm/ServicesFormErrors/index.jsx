import { v4 as uuid } from 'uuid';
import { ErrorsContainer } from 'src/components/FormErrors/FormErrors.styles';
import ErrorMessage from 'src/components/FormErrors/ErrorMessage';
import { Wrapper } from './ServicesFormErrors.styles';

export default function ServicesFormErrors({ errors }) {
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
