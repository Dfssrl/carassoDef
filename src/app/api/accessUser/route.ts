/* eslint-disable @typescript-eslint/no-unused-vars */

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { cookies } from "next/headers";
import { getDataSource } from "@/connection/data-source";
import { User } from "@/entities/user";
import { NextResponse } from "next/server";


const JWT_SECRET = process.env.JWT_SECRET!;

const handlerLogin = async (req: Request) => {
    {/** Prima di mandare tutto in produzione ricordarsi di 
        implementare un Rate Limiting */}
    try {
        const { email, password } = await req.json();
        if (!email || !password) {
            return NextResponse.json({
                success: false,
<<<<<<< HEAD
                message: "Email or password required",
            }, { status: 400 });
        }

        const dataSource = await getDataSource();

        const user = await dataSource
            .getRepository(User)
            .createQueryBuilder("user")
            .where("user.email = :email", { email })
            .getOne();

        if (!user) {
            return NextResponse.json({
                success: false,
                message: "User not founded",
=======
                message: "Email e password obbligatori!"
>>>>>>> 0511825eccef5fdf33dacc12c1e83c15023851d3
            }, { status: 404 });
        }

        const matchPassword = await bcrypt.compare(password, user.password);
        if (!matchPassword) {
            return NextResponse.json({
                success: false,
                message: "Password is invalid!",
            }, { status: 404 });
        }

        // se i dati corrispondessero allora...
        const token = jwt.sign(
            { id: user.id, email: user.email },
            JWT_SECRET,
            { expiresIn: "3d" },
        );

<<<<<<< HEAD
        (await cookies()).set({
            name: "AuthToken",
            value: token,
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            path: "/",
            maxAge: 3 * 24 * 60 * 60,
=======
  // Login ok: genera token o sessione (es. JWT)
  return NextResponse.json({
            success: true,
            ruolo: user.ruolo,
            message: "Login effettuato",
>>>>>>> 0511825eccef5fdf33dacc12c1e83c15023851d3
        });

        return NextResponse.json({
            success: true,
            message: "Your credential are valid",
        });

    } catch (error) {
        console.error(`This login is not allowed`);
        return NextResponse.json({
            success: false,
<<<<<<< HEAD
            message: `This login is not allowed because ${String(error)}`
=======
            
            message: `Unfortunately process make an error: ${String(error)}`
>>>>>>> 0511825eccef5fdf33dacc12c1e83c15023851d3
        });
    }
};

export default handlerLogin;