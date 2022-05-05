import axios from 'axios';

export const onSubmit = async (reset, getFormValues) => {
  try {
    console.log('submit');
    console.log(getFormValues());

    // const payload = { name: 'something' };
    const payload = getFormValues();

    console.log('payload ->', payload);

    const response = await axios.post('/api/contact', { payload }).catch((error) => console.log('error form.js ->', error));

    await console.log('response', response);
    await console.log('response.status', response.status);

    reset();
  } catch (error) {
    console.log(error);
  }
};
