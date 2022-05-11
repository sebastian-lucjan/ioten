import valuationData from 'src/data/valuationData';
import { v4 as uuid } from 'uuid';
import styled from 'styled-components';
// import { useState } from 'react';

const StyledFormStep = styled.div``;

const OptionsContainer = styled.div`
  margin-top: 2rem;
`;

export const StyledCheckbox = styled.div`
  height: 32px;
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
    //height: 32px;
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

export default function FormStep({ watch, surveyStep, register }) {
  const question = valuationData.surveySteps[surveyStep];
  // const [questionAnswered, setQuestionAnswered] = useState(false);

  console.log('FormStep: ', question.options);
  console.log('watch', watch());

  // if (question.required) {
  //   setArray((prevState) => [...prevState, question]);
  //   console.log(array);
  // }
  const handleChange = (e) => {
    console.log('handleChange: ', e.target.value);
  };

  return (
    <StyledFormStep>
      <OptionContainer key={uuid()}>
        <OptionHeading>{question.heading}</OptionHeading>

        <OptionDescription>{question.description}</OptionDescription>

        <OptionsContainer>
          {question.options.map(({ text, type, name }) => {
            if (type === 'checkbox') {
              return <ValuationCheckbox key={uuid()} register={register} text={text} name={name} onChange={handleChange} />;
            }
            if (type === 'textarea') {
              return <ValuationTextarea key={uuid()} register={register} text={text} name={name} />;
            }
            if (type === 'text') {
              return <ValuationTextInput key={uuid()} register={register} text={text} name={name} />;
            }
            return null;
          })}
        </OptionsContainer>
        {question.required ? (
          <InfoIsRequired>Odpowiedź na to pytanie jest wymagana do zakończenia formularza</InfoIsRequired>
        ) : (
          <InfoIsRequired>Odpowiedź nie jest wymagana</InfoIsRequired>
        )}
      </OptionContainer>
    </StyledFormStep>
  );
}

// font-family: ${({ theme, weight }) => {
//   switch (weight) {
//     case 'light':
//       return theme.font.family.myriadPro.light;
//     case 'regular':
//       return theme.font.family.myriadPro.bold;
//     case 'black':
//       return theme.font.family.myriadPro.black;
//     default:
//       return theme.font.family.myriadPro.bold;
//   }
// }};
// font-weight: normal;
// font-size: ${({ theme, size }) => {
//   switch (size) {
//     case 'xs': // 1.4rem
//       return theme.font.size.smallText;
//     case 'sm': // 2rem
//       return theme.font.size.headingSmall;
//     case 'md': // 2.8rem
//       return theme.font.size.headingMedium;
//     case 'lg': // 3.6rem
//       return theme.font.size.headingSection;
//     default:
//       return theme.font.size.headingSmall; // 2rem
//   }
// }};
// ${({ color }) => (color ? `color: ${color}` : '')}//passed color
