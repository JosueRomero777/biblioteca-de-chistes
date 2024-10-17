import { Module } from '@nestjs/common';
import { LibraryJokesService } from './library-jokes.service';
import { LibraryJokesController } from './library-jokes.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [LibraryJokesController],
  providers: [LibraryJokesService],
  imports: [PrismaModule],
})
export class LibraryJokesModule {}
