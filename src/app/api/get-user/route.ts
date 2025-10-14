<<<<<<< HEAD
import 'reflect-metadata';
=======
/* eslint-disable @typescript-eslint/no-unused-vars */
>>>>>>> 0511825eccef5fdf33dacc12c1e83c15023851d3
import { getDataSource } from "@/connection/data-source";
import { User } from "@/entities/user";
import { NextResponse } from "next/server";

<<<<<<< HEAD
const GET = async () => {
=======
export async function GET(req: Request) {
>>>>>>> 0511825eccef5fdf33dacc12c1e83c15023851d3
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
<<<<<<< HEAD
};

export default GET;
=======
}
>>>>>>> 0511825eccef5fdf33dacc12c1e83c15023851d3
