import 'reflect-metadata';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ResetPassword {
    @PrimaryGeneratedColumn()
    id!: number;
    @Column()
    iduser!: number;
    @Column()
    token!: string;
}