import { Module } from '@nestjs/common';
import { BookAuthorsController } from './book_authors.controller.js';
import { BookAuthorsService } from './book_authors.service.js';
import { BookAuthor } from './entities/book_authors-entity.js';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([BookAuthor])],
  controllers: [BookAuthorsController],
  providers: [BookAuthorsService]
})
export class BookAuthorsModule {}
