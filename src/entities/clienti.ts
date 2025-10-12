import 'reflect-metadata';
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Clienti {
    @PrimaryGeneratedColumn()
    id!: number;
    @Column()
    iduser!: number;
    @Column()
    rag_soc!: string;
    @Column()
    indirizzo!: string;
    @Column()
    cap!: string;
    @Column()
    comune!: string;
    @Column()
    provincia!: string;
    @Column()
    c_f!: string;
    @Column()
    p_iva!: string;
    @Column()
    sdi!: string;
    @Column({ default: 0 })
    eliminato!: number
}