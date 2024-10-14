import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';
import { yamlValidationSchema } from 'src/shared/config/schema/yamlConfigs.schema';
import { validateYamlConfig } from 'src/shared/config/schema/schemaValidators/yamlConfig.schemaValidator';

export default () => {
  // Load and parse the YAML file
  const doc = yaml.load(readFileSync('./src/shared/config/config.yaml', 'utf8'));
  validateYamlConfig(doc,yamlValidationSchema);
  return doc; // Return the validated configuration
};
