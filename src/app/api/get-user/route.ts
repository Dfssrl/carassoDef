import 'reflect-metadata';
import { getDataSource } from "@/connection/data-source";
import { User } from "@/entities/user";
import { NextResponse } from "next/server";

const GET = async () => {
    try {
        const dataSource = await getDataSource();
        const result = dataSource.getRepository(User);

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
};

export default GET;