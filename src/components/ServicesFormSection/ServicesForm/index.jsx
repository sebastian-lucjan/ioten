import { useForm } from 'react-hook-form';
import SubmitButton from 'src/components/ContactMainView/ContactForm/SubmitButton';
import contactData from 'src/data/contactData';
import { CheckboxInput } from 'src/components/ContactMainView/ContactForm/FormFields';
import { FormDuel, StyledServicesForm, StyledTextAreaWrapper, StyledTextInputWrapper } from './ServicesForm.styles';
import ServicesFormErrors from './ServicesFormErrors';

export default function ServicesForm() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    isSubmitting,
    formState: { errors },
  } = useForm();

  // todo: think if you want small gray caption when not focused but full of characters - you need common state for all form

  const onSubmit = (data) => {
    console.log('services form submit()');
    reset();
    console.log(data);
  };

  console.log('errors -> ', errors);

  const { nameStringConditions, emailStringConditions, textareaStringConditions, policyCheckboxConditions, ndaCheckboxConditions } =
    contactData.contactContent.form.conditions;

  const isError = () => Object.keys(errors).length > 0;

  console.log('isSubmitting ServicesForm -> ', isSubmitting);

  return (
    <StyledServicesForm as="form" onSubmit={handleSubmit(onSubmit)}>
      <FormDuel>
        <TextInput watch={watch} name="name" register={register} required text="Imię" inputConditions={nameStringConditions} />
        <TextInput watch={watch} name="email" register={register} required text="Email" inputConditions={emailStringConditions} />
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
      <SubmitButton hasError={isError()} />
      {isError() ? <ServicesFormErrors hasError errors={errors} /> : null}
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
