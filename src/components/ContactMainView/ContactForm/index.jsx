import { useForm } from 'react-hook-form';

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  console.log('errors -> ', errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Imię" {...register('Imię', { required: true, max: 80, min: 3, maxLength: 80 })} />
      <input type="text" placeholder="Email" {...register('Email', { required: true, pattern: /^\S+@\S+$/i })} />
      <input type="text" placeholder="Nazwa firmy" {...register('Nazwa firmy', { required: true, max: 80, min: 3, maxLength: 80 })} />
      <input type="tel" placeholder="Numer telefonu" {...register('Numer telefonu', { required: true, max: 18, min: 7, maxLength: 18 })} />
      <select {...register}>
        <option value="Reklama">Reklama</option>
        <option value="Social media">Social media</option>
        <option value="Od innej osoby">Od innej osoby</option>
        <option value="Inne">Inne</option>
      </select>
      <textarea {...register('Twoja wiadomość', { required: true, min: 5, maxLength: 1000 })} />
      <input type="checkbox" placeholder="policy" {...register('policy', { required: true })} />
      <input type="checkbox" placeholder="nda" {...register('nda', {})} />
      <input type="submit" />
    </form>
  );
}
