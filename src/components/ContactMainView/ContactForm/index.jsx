import { useForm } from 'react-hook-form';
import contactData from 'src/data/contactData';
import { Wrapper } from './ContactForm.styles';
import SubmitButton from './SubmitButton';
import { CheckboxInput, TextArea, TextInput } from './FormFields';

export default function ContactForm() {
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
    <Wrapper as="form" onSubmit={handleSubmit(onSubmit)}>
      <TextInput watch={watch} name="name" register={register} required text="Imię" inputConditions={nameStringConditions} />
      <TextInput watch={watch} name="email" register={register} required text="Email" inputConditions={emailStringConditions} />
      <TextInput watch={watch} name="company" register={register} text="Nazwa firmy" inputConditions={companyStringConditions} />
      <TextInput watch={watch} name="mobile" register={register} text="Numer telefonu" inputConditions={phoneNumberStringConditions} />
      {/* <SelectInput watch={watch} register={register} /> //to many form fields */}
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
    </Wrapper>
  );
}
