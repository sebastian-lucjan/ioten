import axios from 'axios';

export const onSubmit = async (reset, getFormValues, setError, token) => {
  // export const onSubmit = async (reset, getFormValues) => {
  try {
    console.log('start submitting');
    console.log('token', token);

    if (!token) {
      setError('Please verify you are human');
      return;
    }

    setError('');

    // verify hCaptcha
    const hCaptchaResponse = await axios
      .post('https://hcaptcha.com/siteverify', { secret: process.env.HCAPTCHA_SECRET_KEY, response: token })
      .catch((error) => console.log('error form.js ->', error));

    console.log('hCaptchaResponse', hCaptchaResponse);

    const isHCaptchaValid = hCaptchaResponse.data.success;

    const payload = getFormValues();

    console.log('payload ->', payload);

    const response = await axios.post('/api/contact', { ...payload, isHCaptchaValid }).catch((error) => console.log('error form.js ->', error));

    if (response.status === 200) {
      console.log('done submitting');
      reset();
    }
  } catch (error) {
    console.log(error);
  }
};
