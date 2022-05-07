import { useForm } from 'react-hook-form';
import contactData from 'src/data/contactData';
import { onSubmit } from 'src/helpers/form';
import { TextParagraph } from 'src/components/TextComponents';
import { useEffect, useRef, useState } from 'react';
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

  // todo: think if you want small gray caption when not focused but full of characters - you need common state for all form

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

  useEffect(() => {
    console.log('isSubmitting -> ', isSubmitting);
    if (!isSubmitting) {
      console.log('isSubmitting DONE -> ', isSubmitting);
      // reset();
    }
  }, [isSubmitting]);

  const [token, setToken] = useState(null);
  const captchaRef = useRef(null);
  const [error, setError] = useState('');

  const onLoad = () => {
    // this reaches out to the hCaptcha JS API and runs the
    // execute function on it. you can use other functions as
    // documented here:
    // https://docs.hcaptcha.com/configuration#jsapi
    console.log('hcaptcha loaded');
    captchaRef.current.execute();
    console.log('captchaRef.current -> ', captchaRef.current);
  };

  useEffect(() => {
    if (token) console.log(`hCaptcha Token: ${token}`);
  }, [token]);

  const onVerify = (tokenPassed, eKey) => {
    console.log('hCaptcha Token verified: ', tokenPassed);
    console.log('hCaptcha eKey: ', eKey);

    setToken(tokenPassed);
  };

  return (
    <Wrapper hasError={isError()} as="form" onSubmit={handleSubmit(() => onSubmit(reset, watch, setError, token))}>
      <div className="form__container">
        <div className="form__name-email form-duel">
          <TextInput watch={watch} name="name" register={register} required text="Imię" inputConditions={nameStringConditions} />
          <TextInput watch={watch} name="email" register={register} required text="Email" inputConditions={emailStringConditions} />
        </div>
        <div className="form__company-mobile form-duel">
          <TextInput watch={watch} name="company" register={register} text="Nazwa firmy" inputConditions={companyStringConditions} />
          <TextInput watch={watch} name="mobile" register={register} text="Numer telefonu" inputConditions={phoneNumberStringConditions} />
        </div>
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
        <TextParagraph size="xs" lh="xs">
          * Pola tekstowe: telefon, nazwa firmy nie są polami obowiązkowymi.
        </TextParagraph>

        <HCaptcha
          sitekey={process.env.HCAPTCHA_SITE_KEY}
          onLoad={onLoad}
          onVerify={(tokenPassed, eKey) => onVerify(tokenPassed, eKey)}
          onExpire={() => setToken('')}
          ref={captchaRef}
        />

        {error ? (
          <TextParagraph size="xs" lh="xs" color="red">
            {error}
          </TextParagraph>
        ) : (
          'OK! hCaptcha is working!'
        )}

        <SubmitButton hasError={isError()} />
      </div>
      {isError() ? <FormErrors hasError errors={errors} /> : null}
    </Wrapper>
  );
}
