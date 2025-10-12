import 'reflect-metadata';
import path from 'path';
import { DataSource } from 'typeorm';
import { Clienti } from '@/entities/clienti';

let AppDataSource: DataSource | null = null; 

export const getDataSource = async () => {
    // Se è già inizializzato, restituiscilo immediatamente
    if (AppDataSource && AppDataSource.isInitialized) {
        return AppDataSource;
    }

    // Altrimenti, crea e inizializza una nuova istanza
    const dataSource = new DataSource({
        type: 'mysql',
        host: 'carasso.administratorsmart.com',
        port: 3306,
        username: 's2846fa6_admin',
        password: 'Bactyiam2196?',
        database: 's2846fa6_carasso',
        entities: [Clienti], // Rimuovi il pattern, usa l'array
        synchronize: false,
        logging: process.env.NODE_ENV === 'development', // Utile per il debug
    });

    AppDataSource = await dataSource.initialize();
    return AppDataSource;
};