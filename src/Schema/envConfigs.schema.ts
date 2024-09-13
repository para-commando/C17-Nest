import * as Joi from 'joi';

export const envValidationSchema = Joi.object({
  // Environment variables validation
  NODE_ENV: Joi.string().valid('development', 'production', 'test','local').required(),
  DATABASE_HOST: Joi.string().hostname().required(),
  DATABASE_PORT: Joi.number().port().required(),
  DB_PASSWORD: Joi.string().required(),
  DB_NAME: Joi.string().required(),
  DB_USER: Joi.string().required(),
  APP_PORT: Joi.number().port().required(),
});
