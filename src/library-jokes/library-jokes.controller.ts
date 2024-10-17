import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LibraryJokesService } from './library-jokes.service';
import { CreateLibraryJokeDto } from './dto/create-library-joke.dto';
import { UpdateLibraryJokeDto } from './dto/update-library-joke.dto';

@Controller('library-jokes')
export class LibraryJokesController {
  constructor(private readonly libraryJokesService: LibraryJokesService) {}

  @Post()
  create(@Body() createLibraryJokeDto: CreateLibraryJokeDto) {
    return this.libraryJokesService.create(createLibraryJokeDto);
  }

  @Get()
  findAll() {
    return this.libraryJokesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.libraryJokesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLibraryJokeDto: UpdateLibraryJokeDto) {
    return this.libraryJokesService.update(+id, updateLibraryJokeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.libraryJokesService.remove(+id);
  }
}
