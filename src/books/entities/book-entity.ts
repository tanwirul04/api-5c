import { Column, 
    CreateDateColumn, 
    DeleteDateColumn, 
    Entity, 
    PrimaryGeneratedColumn, JoinColumn,
    ManyToOne,
    OneToMany,
    UpdateDateColumn, } from 'typeorm';

import type { Relation } from 'typeorm';

import { Category } from '../../categories/entities/categories-entity.js';
import { Publisher } from '../../publishers/entities/publishers-entity.js';
import { BookAuthor } from '../../book_authors/entities/book_authors-entity.js';
import { OrderItem } from '../../order_items/entities/order-items-entity.js';


@Entity('books')

export class Book{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({type: 'varchar', length: 64})
    name: string;

    @Column({type: 'varchar', length: 128})
    author: string;

    @Column({type: 'varchar'})
    isbn: string;

    @Column({type: 'int'})
    publishedYear: number;

    @Column({type: 'boolean', default: true})
    isAvailable: boolean;

    @ManyToOne(() => Category, (category) => category.books)
    @JoinColumn({ name: 'category_id' })
    category: Relation<Category>;

    @ManyToOne(() => Publisher, (publisher) => publisher.books)
    @JoinColumn({ name: 'publisher_id' })
    publisher: Relation<Publisher>;

    @OneToMany(() => BookAuthor, (bookAuthor) => bookAuthor.book)
    bookAuthors: Relation<BookAuthor[]>;

    @OneToMany(() => OrderItem, (orderItem) => orderItem.book)
    orderItems: Relation<OrderItem[]>;

    @CreateDateColumn({name: 'created_at'})
    createdAt: Date;

    @UpdateDateColumn({name: 'updated_at'})
    updatedAt: Date;

    @DeleteDateColumn({name: 'deleted_at', nullable: true})
    deletedAt: Date;
}