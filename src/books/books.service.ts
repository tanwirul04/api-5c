import { Injectable } from '@nestjs/common';
import { Book } from './entities/book-entity.js';
import { CreateBookDto } from './dto/create-book-dto.js';

@Injectable()    // @ bacanya decorator, digunakan untuk menandai class sebagai service yang dapat di-inject ke dalam controller atau service lain.
export class BooksService {
    // data dari database, sementara ini menggunakan array untuk menyimpan data buku
    private books: Book[] = [
        {
        id: 1,
        name: 'Buku 1',
        author: 'Author 1',
        isbn: '123-4-56-789-0',
        publishedYear: 2020,
        isAvailable: true
        },
        {
        id: 2,
        name: 'Buku 2', 
        author: 'Author 2',
        isbn: '098-7-65-432-1',
        publishedYear: 2021,
        isAvailable: true
        }
        
    ];

    // menampilkan data buku dari database
    findAll(): Book[] {
        return this.books;
    }

    // mengambil data buku berdasarkan id dari database
    findOne(id: number): Book | undefined {
        return this.books.find(book => book.id === id);
    }

    // menyimpan data buku baru ke database
    create(book: CreateBookDto): Book {
        const newBook: Book = {
            id: this.books.length + 1,
            name: book.name,
            author: book.author,
            isbn: book.isbn,
            publishedYear: book.publishedYear,
            isAvailable: true
        }

        // simpan ke database
        this.books.push(newBook);
        return newBook;
    }

    // mengupdate data buku berdasarkan id dari database
    update(id: number, book: CreateBookDto): Book | undefined {
        const index = this.books.findIndex(b => b.id === id);
        if (index !== -1) {
            this.books[index] = {
                id: id,
                name: book.name,
                author: book.author,
                isbn: book.isbn,
                publishedYear: book.publishedYear,
                isAvailable: true
            }
            return this.books[index];
        }
        return undefined;
    }

    // menghapus data buku berdasarkan id dari database
    delete(id: number): boolean {
        const index = this.books.findIndex(b => b.id === id); 
        if (index !== -1) {
            this.books.splice(index, 1);
            return true;
        }
        return false;
    }
}
