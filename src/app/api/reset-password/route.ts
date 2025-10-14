<<<<<<< HEAD
import 'reflect-metadata';
=======
/* eslint-disable @typescript-eslint/no-unused-vars */

>>>>>>> 0511825eccef5fdf33dacc12c1e83c15023851d3
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { getDataSource } from "@/connection/data-source";
import { User } from "@/entities/user";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

const JWT_SECRET = process.env.JWT_SECRET!;

export async function POST(req: Request) {
<<<<<<< HEAD
    let body;
=======
           

>>>>>>> 0511825eccef5fdf33dacc12c1e83c15023851d3

    try {
        const { email, password } = await req.json();
        if (!email || !password) {
            return NextResponse.json({
                success: false,
                message: "Email and password required!"
            }, { status: 404 });
        }

        const dataSource = await getDataSource(); // inizializza la connessione
        const userRepo = dataSource.getRepository(User); // tutti gli users presi
        const findEmailUser = await userRepo.findOneBy({ email });

        // se non troviamo l'utente
        if (!findEmailUser) {
            return NextResponse.json({
                success: false,
                message: "This user not exist!"
            }, { status: 403 });
        }

        // Hash new password
        const hashedPassword = await bcrypt.hash(password, 15);
        findEmailUser.password = hashedPassword;

        // save new data in your user table
        await userRepo.save(findEmailUser);

        // token generation
        const token = jwt.sign(
            { id: findEmailUser.id, email: findEmailUser.email },
            JWT_SECRET,
            { expiresIn: "3d" }
        );

        (await cookies()).set({
            name: "AuthToken",
            value: token,
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            path: "/",
            maxAge: 3 * 24 * 60 * 60,
        });

        return NextResponse.json({
            success: true,
            message: "New password is saved!",
        });

    } catch (error) {
        console.log(error)
        console.error("This process is not allowed or not correct!");
        return NextResponse.json({
            success: false,
            message: `Unfortunately process make an error: ${String(error)}`
        });
    };
};

//export default POSTSavePassword;
