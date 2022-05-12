import axios from 'axios';

const onSubmit = async (reset, getFormValues) => {
  console.log('onSubmit()');

  try {
    const payload = getFormValues();

    const response = await axios.post('/api/valuation', { ...payload }).catch((responseError) => console.log(responseError));

    if (response.status === 200) {
      reset();
    }
  } catch (error) {
    console.log('error from Joi', error);
  }
};

export default onSubmit;
