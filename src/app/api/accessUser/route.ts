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
                message: "Email and password required!"
            }, { status: 404 });
        }

     const dataSource = await getDataSource();
  const userRepo = dataSource.getRepository(User);
  const user = await userRepo.findOneBy({ email });
  if (!user) {
    throw new Error("Utente non trovato");
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Password errata");
  }

  // Login ok: genera token o sessione (es. JWT)
  return NextResponse.json({
            success: true,
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