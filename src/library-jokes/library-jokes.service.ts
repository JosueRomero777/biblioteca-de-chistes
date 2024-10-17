import { Injectable } from '@nestjs/common';
import { CreateLibraryJokeDto } from './dto/create-library-joke.dto';
import { UpdateLibraryJokeDto } from './dto/update-library-joke.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LibraryJokesService {
  constructor(private prisma: PrismaService){}




   findAll() {
   return this.prisma.libraryJoke.findMany;
   }

  findOne(id: number) {
    return this.prisma.libraryJoke.findUnique({
      where:{id},
  
  });
  }

  create(createLibraryJokeDto: CreateLibraryJokeDto) {
    return this.prisma.libraryJoke.create({
      data: createLibraryJokeDto,
    });
  }

  update(id: number, updateLibraryJokeDto: UpdateLibraryJokeDto) {
    return this.prisma.libraryJoke.update({
      where:{id},
      data: updateLibraryJokeDto,
    });
  }

  remove(id: number) {
    return this.prisma.libraryJoke.delete({
      where:{id},
  })
}

}