import { Test, TestingModule } from '@nestjs/testing';
import { LibraryJokesService } from './library-jokes.service';

describe('LibraryJokesService', () => {
  let service: LibraryJokesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LibraryJokesService],
    }).compile();

    service = module.get<LibraryJokesService>(LibraryJokesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
