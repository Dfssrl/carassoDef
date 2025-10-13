import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Clienti } from '@/entities/clienti';
import { User } from '@/entities/user';

let AppDataSource: DataSource | null = null; 

export const getDataSource = async () => {
    // Se è già inizializzato, restituiscilo immediatamente
    if (AppDataSource && AppDataSource.isInitialized) {
        return AppDataSource;
    }

    // Altrimenti, crea e inizializza una nuova istanza
    const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username:  process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database:  process.env.DB_NAME,
        entities: [User, Clienti], // Rimuovi il pattern, usa l'array
        synchronize: false,
        logging: process.env.NODE_ENV === 'development', // Utile per il debug
    });

    AppDataSource = await dataSource.initialize();
    return AppDataSource;
};

{/**Errore DB:  Error: Handshake inactivity timeout
    at new Promise (<anonymous>)
    at getDataSource (src\connection\data-source.ts:27:38)
    at GET (src\app\api\test-db\route.ts:7:47)
  25 |     });
  26 |
> 27 |     AppDataSource = await dataSource.initialize();
     |                                      ^
  28 |     return AppDataSource;
  29 | }; {
  code: 'PROTOCOL_SEQUENCE_TIMEOUT',
  fatal: true,
  timeout: 10000
} */}