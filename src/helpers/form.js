import axios from 'axios';

export const onSubmit = async (reset, getFormValues, setError, token, captchaRef) => {
  try {
    if (!token) {
      setError('Please verify you are human');
      return;
    }

    setError('');

    const payload = getFormValues();

    const response = await axios
      .post('/api/contact', { ...payload, token })
      .catch((responseError) => setError(responseError.data.error))
      .finally(() => {
        // reset hCaptcha no matter what
        captchaRef.current.resetCaptcha();
      });

    if (response.status === 200) {
      // reset form
      reset();
    }
  } catch (error) {
    console.log('error from Joi', error);
  }
};
