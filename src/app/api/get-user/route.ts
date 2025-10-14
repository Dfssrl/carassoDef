/* eslint-disable @typescript-eslint/no-unused-vars */
import { getDataSource } from "@/connection/data-source";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    try {
        const dataSource = await getDataSource();
        const result = await dataSource.query("SELECT * FROM user");

        return NextResponse.json({
            success: true,
            result
        });
    } catch (error) {
        console.error("Error into GET: ", error);
        return NextResponse.json({
            success: false,
            error: String(error),
        }, {
            status: 500,
        });
    }
}
