import axios from 'axios';

// export const onSubmit = async (reset, getFormValues, setError, token) => {
export const onSubmit = async (reset, getFormValues) => {
  try {
    console.log('start submitting');

    // if (!token) {
    //   setError('Please verify you are human');
    //   return;
    // }
    //
    // setError('');

    const payload = getFormValues();

    console.log('payload ->', payload);

    const response = await axios.post('/api/contact', { payload }).catch((error) => console.log('error form.js ->', error));

    if (response.status === 200) {
      console.log('done submitting');
      reset();
    }
  } catch (error) {
    console.log(error);
  }
};
