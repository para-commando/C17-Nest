import * as Joi from 'joi';

export const yamlValidationSchema = Joi.object({
  http: Joi.object({
    host: Joi.string().hostname().required(),
    port: Joi.number().port().required(),
  }).required(),
  db: Joi.object({
    postgres: Joi.object({
      host: Joi.string().hostname().required(),
      port: Joi.number().port().required(),
      databaseName: Joi.string().required(),
      username: Joi.string().required(),
      password: Joi.optional(),
      isSynchronized: Joi.boolean().default(false), // Set to false in production
    }).required(),

    sqlite: Joi.object({
      database: Joi.string().required(),
    }).optional(),
  }).required(),
});