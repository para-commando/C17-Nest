import { Test, TestingModule } from '@nestjs/testing';
import { LogDefinitionService } from './log-definition.service';

describe('LogDefinitionService', () => {
  let service: LogDefinitionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LogDefinitionService],
    }).compile();

    service = module.get<LogDefinitionService>(LogDefinitionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
