/* eslint-disable @typescript-eslint/no-unused-vars */

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { getDataSource } from "@/connection/data-source";
import { User } from "@/entities/user";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";


const JWT_SECRET = process.env.JWT_SECRET!;

export async function POST(req: Request) {
    try {
        const { email, password } = await req.json();
        if (!email || !password) {
            return NextResponse.json({
                success: false,
                message: "Email e password obbligatori!"
            }, { status: 404 });
        }

        const dataSource = await getDataSource();
        const userRepo = dataSource.getRepository(User);
        const user = await userRepo.findOneBy({ email });
        if (!user) {
            const dataSource = await getDataSource();
            const result = dataSource.getRepository(User);
            return NextResponse.json({
                success: false,
                message: 'User not registered in this app'
            })
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            throw new Error("Password errata");
        }

        const token = jwt.sign(
            {
                id: user.id,
                email: user.email,
                ruolo: user.ruolo,
            }, 
            JWT_SECRET,
            {
                expiresIn: "3d",
            }
        );
        const storedCookies = await cookies();
        storedCookies.set(
            "token", token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'lax',
                path: '/',
                maxAge: 3 * 24 * 60 * 60,   
            }
        );
        console.log("Il token di accesso è: ", token);
        // Login ok: genera token o sessione (es. JWT)
        return NextResponse.json({
            success: true,
            ruolo: user.ruolo,
            message: "Login effettuato",
        });
    } catch (error) {
        console.log(error)
        console.error("This process is not allowed or not correct!");
        return NextResponse.json({
            success: false,
            message: `Unfortunately process make an error: ${String(error)}`
        });
    };
}

//export default POSTSavePassword;