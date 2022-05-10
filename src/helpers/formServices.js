import axios from 'axios';

export const onSubmit = async (reset, getFormValues) => {
  try {
    const payload = getFormValues();

    const response = await axios.post('/api/services', { ...payload }).catch((responseError) => console.log(responseError));

    if (response.status === 200) {
      // reset form
      reset();
    }
  } catch (error) {
    console.log('error from Joi', error);
  }
};
