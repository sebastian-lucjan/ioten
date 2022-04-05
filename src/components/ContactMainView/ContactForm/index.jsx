import { useForm } from 'react-hook-form';
import contactData from 'src/data/contactData';
import { Wrapper } from './ContactForm.styles';
import SubmitButton from './SubmitButton';
import { CheckboxInput, TextArea, TextInput } from './FormFields';

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

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
    <Wrapper as="form" onSubmit={handleSubmit(onSubmit)}>
      <TextInput name="name" register={register} required text="Imię" inputConditions={nameStringConditions} />
      <TextInput name="email" register={register} required text="Email" inputConditions={emailStringConditions} />
      <TextInput name="company" register={register} text="Nazwa firmy" inputConditions={companyStringConditions} />
      <TextInput name="mobile" register={register} text="Numer telefonu" inputConditions={phoneNumberStringConditions} />
      {/* <SelectInput register={register} /> */}
      <TextArea name="message" register={register} required inputConditions={textareaStringConditions} />
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
    </Wrapper>
  );
}
