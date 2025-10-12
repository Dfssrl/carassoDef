import 'reflect-metadata';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class RecuperaPassword {
    @PrimaryGeneratedColumn()
    id!: number;
    @Column()
    iduser!: number;
    @Column()
    token!: string;
}