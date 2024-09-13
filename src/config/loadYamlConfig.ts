import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';
import { yamlValidationSchema } from 'src/Schema/yamlConfigs.schema';
import { validateYamlConfig } from 'src/schemaValidators/yamlConfig.schemaValidator';

export default () => {
  // Load and parse the YAML file
  const doc = yaml.load(readFileSync('./src/config/config.yaml', 'utf8'));
  validateYamlConfig(doc,yamlValidationSchema);
  return doc; // Return the validated configuration
};
