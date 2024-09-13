import * as Joi from 'joi';

export const yamlValidationSchema = Joi.object({
  http: Joi.object({
    host: Joi.string().hostname().required(),
    port: Joi.number().port().required(),
  }).required(),
  db: Joi.object({
    postgres: Joi.object({
      url: Joi.string().hostname().required(),
      port: Joi.number().port().required(),
      database: Joi.string().required(),
    }).required(),

    sqlite: Joi.object({
      database: Joi.string().required(),
    }).optional(),
  }).required(),
});