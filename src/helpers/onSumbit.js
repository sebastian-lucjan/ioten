import axios from 'axios';

const onSubmit = async (reset, getFormValues) => {
  try {
    const payload = getFormValues();

    const {
      response: {
        status,
        data: { payloadError },
      },
    } = await axios.post('/api/valuation', { ...payload }).catch((responseError) => responseError);
    console.log('onSubmit() - response.data: ', payloadError);
    console.log('onSubmit() - response.status: ', status);

    if (status === 200) {
      reset();
    } else if (status === 422) {
      console.log('onSubmit() - 422');
      // setError()
      // setError((prevState) => {
      //   return {
      //     ...prevState,
      //     label: response.data.payloadError.label,
      //     message: response.data.payloadError.message,
      //     type: response.data.payloadError.type,
      //   };
      // });
    }
  } catch (error) {
    // console.log('error from Joi', error);
  }
};

export default onSubmit;
