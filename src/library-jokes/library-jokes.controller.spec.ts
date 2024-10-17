import { Test, TestingModule } from '@nestjs/testing';
import { LibraryJokesController } from './library-jokes.controller';
import { LibraryJokesService } from './library-jokes.service';

describe('LibraryJokesController', () => {
  let controller: LibraryJokesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LibraryJokesController],
      providers: [LibraryJokesService],
    }).compile();

    controller = module.get<LibraryJokesController>(LibraryJokesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
