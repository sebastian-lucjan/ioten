import Joi from 'joi';

const schema = Joi.object({
  landingpage: Joi.bool(),
  wwwWithTabs: Joi.bool(),
  wwwWithFunctions: Joi.bool(),
  wwwProduct: Joi.bool(),
  otherPage: Joi.bool(),
  strategy: Joi.bool(),
  content: Joi.bool(),
  design: Joi.bool(),
  www: Joi.bool(),
  cms: Joi.bool(),
  support: Joi.bool(),
  others: Joi.bool(),
  companyDescription: Joi.string().min(1).max(300).required(),
  companyWebsite: Joi.string().min(3).max(200).allow(''),
  budget: Joi.string().min(3).max(60).allow(''),
  moreInfo: Joi.string().min(3).max(400).allow(''),
  name: Joi.string().min(1).max(40).required(),
  email: Joi.string().email().min(6).max(80).required(),
});
// todo: check if email is valid or delete .email()

const validate = async (payload) => {
  const validateFormContent = await schema.validateAsync(payload);

  return validateFormContent;
};

export default validate;
