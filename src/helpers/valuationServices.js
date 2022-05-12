import axios from 'axios';

export const onSubmit = async (reset, getFormValues) => {
  // watch from react-hook-form === getFormValues
  console.log('onSubmit()');

  try {
    const payload = getFormValues();
    console.log('payload - onSubmit()', payload);

    const response = await axios.post('/api/valuation', { ...payload }).catch((responseError) => console.log(responseError));
    console.log('response', response);

    if (response.status === 200) {
      // reset form
      reset();
    }
  } catch (error) {
    console.log('error from Joi', error);
  }
};
