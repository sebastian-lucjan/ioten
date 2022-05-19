import valuationData from 'src/data/valuationData';
import styled from 'styled-components';

const StyledFormStep = styled.div``;

const OptionsContainer = styled.div`
  margin-top: 2rem;
`;

export const StyledCheckbox = styled.div`
  width: 100%;
  margin-bottom: 1rem;

  label {
    display: flex;
  }

  p {
    font-size: ${({ theme }) => theme.font.size.smallText};
    position: relative;
    display: block;
    margin-left: 1rem;
    line-height: 16px;
  }
`;

const StyledTextInput = styled.div`
  input {
    width: 100%;
    border: 1px solid ${({ theme }) => theme.color.lightGray};
    border-radius: 4px;
    height: 32px;
    padding: 0 8px;
    font-size: ${({ theme }) => theme.font.size.smallText};
  }
`;

const StyledTextarea = styled.div`
  textarea {
    width: 100%;
    border: 1px solid ${({ theme }) => theme.color.lightGray};
    border-radius: 4px;
    height: 120px;
    padding: 8px;
    font-size: ${({ theme }) => theme.font.size.smallText};
  }
`;

function ValuationTextInput({ text, name, register, inputConditions }) {
  return (
    <StyledTextInput>
      <label htmlFor={name}>
        <input type="text" id={name} name={name} {...register(name, inputConditions)} />
        <p>{text}</p>
      </label>
    </StyledTextInput>
  );
}

function ValuationTextarea({ text, name, register, inputConditions }) {
  return (
    <StyledTextarea>
      <label htmlFor={name}>
        <textarea id={name} name={name} {...register(name, inputConditions)} />
        <p>{text}</p>
      </label>
    </StyledTextarea>
  );
}

function ValuationCheckbox({ text, name, register, inputConditions }) {
  return (
    <StyledCheckbox>
      <label htmlFor={name}>
        <input id={name} name={name} type="checkbox" {...register(name, inputConditions)} />
        <p>{text}</p>
      </label>
    </StyledCheckbox>
  );
}
const OptionHeading = styled.h2`
  font-size: ${({ theme }) => theme.font.size.paragraphBig};
  font-family: ${({ theme }) => theme.font.family.myriadPro.bold};
  color: ${({ theme }) => theme.color.darkestGray};
`;

const OptionDescription = styled.p`
  margin-top: 0.5rem;
  font-size: ${({ theme }) => theme.font.size.caption};
  color: ${({ theme }) => theme.color.darkerGray};
`;

const InfoIsRequired = styled.p`
  margin-top: 1rem;
  color: ${({ theme }) => theme.color.darkerGray};
`;

const OptionContainer = styled.div`
  margin-bottom: 4rem;
`;

export default function FormStep({ surveyStep, register }) {
  const question = valuationData.surveySteps[surveyStep];

  return (
    <StyledFormStep>
      <OptionContainer>
        <OptionHeading>{question.heading}</OptionHeading>

        <OptionDescription>{question.description}</OptionDescription>

        <OptionsContainer>
          {question.options.map(({ text, type, name, inputConditions }) => {
            switch (type) {
              case 'text':
                return <ValuationTextInput key={name} text={text} name={name} register={register} inputConditions={inputConditions} />;
              case 'textarea':
                return <ValuationTextarea key={name} text={text} name={name} register={register} inputConditions={inputConditions} />;
              case 'checkbox':
                return <ValuationCheckbox key={name} text={text} name={name} register={register} inputConditions={inputConditions} />;
              default:
                return null;
            }
          })}
        </OptionsContainer>
        {question.required ? (
          <InfoIsRequired>Odpowiedź jest wymagana do zakończenia formularza</InfoIsRequired>
        ) : (
          <InfoIsRequired>Odpowiedź nie jest wymagana</InfoIsRequired>
        )}
      </OptionContainer>
    </StyledFormStep>
  );
}
