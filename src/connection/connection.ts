// Esempio di un file di bootstrap o di avvio del server

import { getDataSource } from "@/connection/data-source"; // Assicurati che il percorso sia corretto

console.log('Avvio connessione...');

// 1. Chiamiamo la funzione asincrona getDataSource()
// 2. Questa funzione si occuperà di creare e inizializzare TypeORM
//    solo se non è già stata fatta (il pattern Singleton)
getDataSource()
    .then((dataSource) => {
        // L'oggetto 'dataSource' è l'istanza TypeORM inizializzata
        console.log('Connessione al database riuscita! 🎉', dataSource);

        // Puoi opzionalmente eseguire una query di prova
        // return dataSource.query('SELECT 1 + 1 AS solution');
    })
    .catch((error) => {
        // Se c'è un errore, TypeORM lo cattura qui
        console.error('Errore di connessione:', error);

        // Potresti voler terminare il processo in caso di fallimento critico
        // process.exit(1); 
    });

// Nota: Il tuo ambiente Next.js gestirà tutto questo all'interno delle Route Handlers.
// Questo codice è utile solo se hai un server Node.js separato che vuoi inizializzare.