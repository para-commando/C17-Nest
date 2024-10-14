import { LogDefinitionMiddleware } from './log-definition.middleware';

describe('LogDefinitionMiddleware', () => {
  it('should be defined', () => {
    expect(new LogDefinitionMiddleware()).toBeDefined();
  });
});
