import { useForm } from 'react-hook-form';
import SubmitButton from 'src/components/ContactMainView/ContactForm/SubmitButton';
import contactData from 'src/data/contactData';
import { CheckboxInput } from 'src/components/ContactMainView/ContactForm/FormFields';
import { FormDuel, StyledServicesForm, StyledTextAreaWrapper, StyledTextInputWrapper } from './ServicesForm.styles';

export default function ServicesForm() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  // todo: think if you want small gray caption when not focused but full of characters - you need common state for all form

  const onSubmit = (data) => {
    reset();
    console.log(data);
  };

  console.log('errors -> ', errors);

  const {
    nameStringConditions,
    emailStringConditions,
    companyStringConditions,
    phoneNumberStringConditions,
    textareaStringConditions,
    policyCheckboxConditions,
    ndaCheckboxConditions,
  } = contactData.contactContent.form.conditions;

  return (
    <StyledServicesForm as="form" onSubmit={handleSubmit(onSubmit)}>
      <FormDuel>
        <TextInput watch={watch} name="name" register={register} required text="Imię" inputConditions={nameStringConditions} />
        <TextInput watch={watch} name="email" register={register} required text="Email" inputConditions={emailStringConditions} />
      </FormDuel>

      <FormDuel>
        <TextInput watch={watch} name="company" register={register} text="Nazwa firmy" inputConditions={companyStringConditions} />
        <TextInput watch={watch} name="mobile" register={register} text="Numer telefonu" inputConditions={phoneNumberStringConditions} />
      </FormDuel>

      <TextArea watch={watch} name="message" register={register} text="Twoja wiadomość" required inputConditions={textareaStringConditions} />

      <CheckboxInput
        text="Akceptuję politykę prywatności"
        name="policy"
        register={register}
        required
        placeholderText="policy"
        inputConditions={policyCheckboxConditions}
      />
      <CheckboxInput
        text="Przed przekazaniem szczegółowych informacji potrzebuję podpisać NDA"
        name="nda"
        register={register}
        placeholderText="nda"
        inputConditions={ndaCheckboxConditions}
      />
      <SubmitButton />
    </StyledServicesForm>
  );
}

export function TextInput({ watch, register, text, inputConditions, name, required = false }) {
  return (
    <StyledTextInputWrapper notEmpty={watch().length} required={required} htmlFor={name}>
      <p>{text}</p>
      <input id={name} name={name} type="text" {...register(name, inputConditions)} />
    </StyledTextInputWrapper>
  );
}

export const TextArea = ({ watch, text, register, placeholderText, name, inputConditions, required }) => {
  return (
    <StyledTextAreaWrapper notEmpty={watch().length} required={required} htmlFor={name}>
      <p>{text}</p>
      <textarea rows="8" id={name} name={name} placeholder={placeholderText} {...register(name, inputConditions)} />
    </StyledTextAreaWrapper>
  );
};
