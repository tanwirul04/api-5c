import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Book } from '../../books/entities/book-entity.js';
import type { Relation } from 'typeorm';

@Entity('categories')

export class Category{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({type: 'varchar', length: 64, unique: true})
    name: string;

    @OneToMany(() => Book, (book) => book.category)
    books: Relation<Book[]>;

    @CreateDateColumn({name: 'created_at'})
    createdAt: Date;

    @UpdateDateColumn({name: 'updated_at'})
    updatedAt: Date;

    @DeleteDateColumn({name: 'deleted_at', nullable: true})
    deletedAt: Date;
}