import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LibraryJokesModule } from './library-jokes/library-jokes.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [LibraryJokesModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
