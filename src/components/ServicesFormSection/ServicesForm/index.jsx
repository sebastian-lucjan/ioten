import { useForm } from 'react-hook-form';
import SubmitButton from 'src/components/ContactMainView/ContactForm/SubmitButton';
import contactData from 'src/data/contactData';
import { CheckboxInput } from 'src/components/ContactMainView/ContactForm/FormFields';
import { useRef } from 'react';
import { onSubmit } from 'src/helpers/formServices';
import { FormDuel, StyledServicesForm, StyledTextAreaWrapper, StyledTextInputWrapper } from './ServicesForm.styles';
import ServicesFormErrors from './ServicesFormErrors';

export default function ServicesForm() {
  const {
    register,
    handleSubmit,
    reset,
    watch,

    formState: { errors, isSubmitting },
  } = useForm();

  const captchaRef = useRef(null);

  console.log('errors -> ', errors);

  const { nameStringConditions, emailStringConditions, textareaStringConditions, policyCheckboxConditions, ndaCheckboxConditions } =
    contactData.contactContent.form.conditions;

  const isError = () => Object.keys(errors).length > 0;

  console.log('isSubmitting ServicesForm -> ', isSubmitting);

  return (
    <StyledServicesForm as="form" onSubmit={handleSubmit(() => onSubmit(reset, watch, captchaRef))}>
      <FormDuel>
        <TextInput watch={watch} name="name" register={register} text="Imię" inputConditions={nameStringConditions} />
        <TextInput watch={watch} name="email" register={register} text="Email" inputConditions={emailStringConditions} />
      </FormDuel>

      <TextArea watch={watch} name="message" register={register} text="Twoja wiadomość" inputConditions={textareaStringConditions} />

      <CheckboxInput
        text="Akceptuję politykę prywatności"
        name="policy"
        register={register}
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

      {/* <HCaptcha */}
      {/*  size="invisible" */}
      {/*  sitekey={process.env.HCAPTCHA_SITE_KEY} */}
      {/*  onVerify={(tokenPassed) => onVerify(tokenPassed)} */}
      {/*  onExpire={onExpire} */}
      {/*   ref={captchaRef} */}
      {/* /> */}

      {/* {error ? ( */}
      {/*  <TextParagraph size="xs" lh="xs" color="red"> */}
      {/*    {error} */}
      {/*  </TextParagraph> */}
      {/* ) : null} */}

      <SubmitButton loading={isSubmitting} hasError={isError()} />
      {isError() ? <ServicesFormErrors hasError errors={errors} /> : null}
    </StyledServicesForm>
  );
}

export function TextInput({ watch, register, text, inputConditions, name }) {
  return (
    <StyledTextInputWrapper notEmpty={watch().length} htmlFor={name}>
      <p>{text}</p>
      <input id={name} name={name} type="text" {...register(name, inputConditions)} />
    </StyledTextInputWrapper>
  );
}

export const TextArea = ({ watch, text, register, placeholderText, name, inputConditions }) => {
  return (
    <StyledTextAreaWrapper notEmpty={watch().length} htmlFor={name}>
      <p>{text}</p>
      <textarea rows="8" id={name} name={name} placeholder={placeholderText} {...register(name, inputConditions)} />
    </StyledTextAreaWrapper>
  );
};
