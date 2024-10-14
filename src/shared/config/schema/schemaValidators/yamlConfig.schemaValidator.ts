
export const validateYamlConfig = (config: Record<string, any>, schema : Record<string, any>) => {
  const { error, value } = schema.validate(config, { abortEarly: false });

  if (error) {
    // If validation fails, throw an error with details
    throw new Error(`YAML Config validation error: ${error.details.map((err) => err.message).join(', ')}`);
  }
  return true;
};