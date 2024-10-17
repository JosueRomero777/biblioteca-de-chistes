import { PartialType } from '@nestjs/mapped-types';
import { CreateLibraryJokeDto } from './create-library-joke.dto';

export class UpdateLibraryJokeDto extends PartialType(CreateLibraryJokeDto) {}
