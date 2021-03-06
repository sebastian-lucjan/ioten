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

        const payloadValidated = await validate({ ...payload });
        console.log('payloadValidated:', payloadValidated);

        await sendValuationFormToIoten(payloadValidated);

        res.status(200).json({
          status: 'payload_sent',
        });
      } catch (error) {
        console.log('error POST:', error);
        console.log('error.message POST:', error.message);

        if (error?.details[0]?.message) {
          const payloadError = {
            label: error.details[0].context.label,
            message: error.details[0].message,
            type: error.details[0].type,
          };

          console.log('payloadError:', payloadError);

          res.status(422).json({ status: 'not_created', payloadError });
        } else {
          res.status(422).json({ status: 'not_created', error });
        }
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
