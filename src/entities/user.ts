import 'reflect-metadata';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id!: number;
    @Column()
    username!: string;
    @Column()
    email!: string;
    @Column()
    password!: string;
    @Column()
    ruolo!: string;
    @Column()
    eliminato!: number;
}