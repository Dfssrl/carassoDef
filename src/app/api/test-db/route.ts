// api/clienti/route.ts
import { getDataSource } from "@/connection/data-source";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const dataSource = await getDataSource(); // Ottieni l'istanza inizializzata
        const result = await dataSource.query("SELECT * FROM clienti");
        
        return NextResponse.json({
            success: true,
            result
        });
    } catch (error) {
        // ... (gestione errore)

        console.error("Errore DB: ", error);
        return NextResponse.json({
            success: false,
            error: String(error),
        },
            {
                status: 500
            },
        );
    }
}