import { useForm } from 'react-hook-form';
import contactData from 'src/data/contactData';
import styled from 'styled-components';
import { CheckboxInput, TextArea, TextInput } from '../ContactMainView/ContactForm/FormFields';
import SubmitButton from '../ContactMainView/ContactForm/SubmitButton';
import Grid from '../Grid';

const Wrapper = styled.div``;

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
    <div>
      <div>
        <p>I CO TERAZ?!</p>
        <h2>“Ok, teraz już coś wiem, ale...</h2>
        <p>
          W takim razie zapraszamy do kontaktu. Zaproponowane usługi oraz etapowanie może być dostosowane do indywidualnych wymagań klienta dlatego
          jeśli masz wątliwości, czy Twój pomysł znajdzie aprobatę ioten... pisz!
        </p>
        <Wrapper as="form" onSubmit={handleSubmit(onSubmit)}>
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
            <SubmitButton />
          </div>
        </Wrapper>
      </div>
      <Grid />
    </div>
  );
}
