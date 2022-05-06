import axios from 'axios';

export const onSubmit = async (reset, getFormValues) => {
  try {
    console.log('submit');

    const payload = getFormValues();

    console.log('payload ->', payload);

    const response = await axios.post('/api/contact', { payload }).catch((error) => console.log('error form.js ->', error));

    if (response.status === 200) {
      reset();
    }
  } catch (error) {
    console.log(error);
  }
};
