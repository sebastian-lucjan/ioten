import sendMessageToIoten from 'src/services/contactForm/sendMessageToIoten';
// import axios from 'axios';
import validate from 'src/services/contactForm/validateMessageToIoten';

export default async (req, res) => {
  console.log('req.method', req.method);

  switch (req.method) {
    case 'GET': {
      console.log('contact GET');
      res.status(200).json({
        status: 'get_contact',
      });
      break;
    }
    case 'POST': {
      try {
        const payload = req.body;
        // const { token } = req.body;

        // const hCaptchaResponse = await axios
        //   .post('https://hcaptcha.com/siteverify', `response=${token}&secret=${process.env.HCAPTCHA_SECRET_KEY}`)
        //   .then((response) => {
        //     console.log('response.data.success', response.data.success);
        //     return response;
        //   })
        //   .catch((error) => console.log('error form.js ->', error));

        // console.log('hCaptchaResponse ===>', hCaptchaResponse);

        // const isHCaptchaValid = hCaptchaResponse.data.success;

        const isHCaptchaValid = true;

        const { name, company, mobile, email, message, policy, nda } = await validate({ ...payload, isHCaptchaValid });

        const from = 'services-contact';

        await sendMessageToIoten(name, company, mobile, email, message, policy, nda, from);

        res.status(200).json({
          status: 'payload_sent',
        });
      } catch (e) {
        console.log(e.message);
      }
      break;
    }
    default: {
      console.log("something's wrong");
      res.status(400).json({
        status: 'Bad request',
      });
    }
  }
};

// todo: add validation and hCaptcha invisible
