import validate from 'src/services/valuation/validateValuationFormToIoten';
import sendValuationFormToIoten from 'src/services/valuation/sendValuationFormToIoten';

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
        console.log('payload req.body', payload);

        const payloadValidated = await validate({ ...payload });
        console.log('payloadValidated:', payloadValidated);

        await sendValuationFormToIoten(payloadValidated);
        console.log('after sendValuationFormToIoten');

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
