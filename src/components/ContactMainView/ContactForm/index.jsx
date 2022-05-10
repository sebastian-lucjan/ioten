import { useForm } from 'react-hook-form';
import contactData from 'src/data/contactData';
import { onSubmit } from 'src/helpers/form';
import { TextParagraph } from 'src/components/TextComponents';
import { useRef, useState } from 'react';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import { Wrapper } from './ContactForm.styles';
import SubmitButton from './SubmitButton';
import { CheckboxInput, TextArea, TextInput } from './FormFields';
import FormErrors from '../../FormErrors';

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const [token, setToken] = useState(null);
  const captchaRef = useRef(null);
  const [error, setError] = useState('');

  console.log('errors -> ', errors.length);

  const {
    nameStringConditions,
    emailStringConditions,
    companyStringConditions,
    phoneNumberStringConditions,
    textareaStringConditions,
    policyCheckboxConditions,
    ndaCheckboxConditions,
  } = contactData.contactContent.form.conditions;

  const isError = () => Object.keys(errors).length > 0;

  const onVerify = (tokenPassed) => {
    setToken(tokenPassed);
  };

  const onExpire = () => {
    setToken('');
  };

  return (
    <Wrapper hasError={isError()} as="form" onSubmit={handleSubmit(() => onSubmit(reset, watch, setError, token, captchaRef))}>
      <div className="form__container">
        <div className="form__name-email form-duel">
          <TextInput watch={watch} name="name" register={register} required text="Imię" inputConditions={nameStringConditions} />
          <TextInput watch={watch} name="email" register={register} required text="Email" inputConditions={emailStringConditions} />
        </div>
        <div className="form__company-mobile form-duel">
          <TextInput watch={watch} name="company" register={register} text="Nazwa firmy" inputConditions={companyStringConditions} />
          <TextInput watch={watch} name="mobile" register={register} text="Numer telefonu" inputConditions={phoneNumberStringConditions} />
        </div>

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

        <TextParagraph size="xs" lh="xs">
          * Pola tekstowe: telefon, nazwa firmy nie są polami obowiązkowymi.
        </TextParagraph>

        <HCaptcha sitekey={process.env.HCAPTCHA_SITE_KEY} onVerify={(tokenPassed) => onVerify(tokenPassed)} onExpire={onExpire} ref={captchaRef} />

        {error ? (
          <TextParagraph size="xs" lh="xs" color="red">
            {error}
          </TextParagraph>
        ) : null}

        <SubmitButton loading={isSubmitting} hasError={isError()} />
      </div>
      {isError() ? <FormErrors hasError errors={errors} /> : null}
    </Wrapper>
  );
}
