import sendMessageToIoten from 'src/services/contactForm/sendMessageToIoten';
import validateMessageToIoten from '../../../src/services/contactForm/validateMessageToIoten';
// import validateMessageToIoten from 'src/services/contactForm/validateMessageToIoten';

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
      console.log('POST api contact -> req.body', req.body);
      try {
        const { payload, isHCaptchaValid } = req.body;
        // const { payload, isHCaptchaValid } = req.body;

        // const { name, company, mobile, email, message, policy, nda } = payload;

        const { name, company, mobile, email, message, policy, nda } = await validateMessageToIoten({ ...payload, isHCaptchaValid });

        await sendMessageToIoten(name, company, mobile, email, message, policy, nda);

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

// todo: add validation and hCaptcha
