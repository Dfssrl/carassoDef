import 'reflect-metadata';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { getDataSource } from "@/connection/data-source";
import { User } from "@/entities/user";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

const JWT_SECRET = process.env.JWT_SECRET;

export async function POST(req: Request) {
  console.log("📨 Ricevuta richiesta POST /api/reset-password");

  let body;
  try {
    const raw = await req.text();
    console.log("📦 Body raw:", raw);
    body = JSON.parse(raw);
  } catch (err) {
    console.error("❌ Errore nel parsing JSON:", err);
    return NextResponse.json({
      success: false,
      message: "Body JSON non valido"
    }, { status: 400 });
  }

  const { email, password } = body;
  if (!email || !password) {
    console.warn("⚠️ Email o password mancanti");
    return NextResponse.json({
      success: false,
      message: "Email and password required!"
    }, { status: 400 });
  }

  if (!JWT_SECRET) {
    console.error("❌ JWT_SECRET non definito");
    return NextResponse.json({
      success: false,
      message: "JWT_SECRET is not defined in environment variables"
    }, { status: 500 });
  }

  let dataSource;
  try {
    dataSource = await getDataSource();
    console.log("✅ Connessione DB riuscita");
  } catch (err) {
    console.error("❌ Errore connessione DB:", err);
    return NextResponse.json({
      success: false,
      message: "Errore di connessione al database"
    }, { status: 500 });
  }

  const userRepo = dataSource.getRepository(User);
  console.log("🔍 Cerco utente con email:", email);
  const findEmailUser = await userRepo.findOneBy({ email });

  if (!findEmailUser) {
    console.warn("⚠️ Utente non trovato");
    return NextResponse.json({
      success: false,
      message: "This user does not exist!"
    }, { status: 403 });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("🔐 Password hashata");

    findEmailUser.password = hashedPassword;
    await userRepo.save(findEmailUser);
    console.log("💾 Password aggiornata nel DB");

    const token = jwt.sign(
      { id: findEmailUser.id, email: findEmailUser.email },
      JWT_SECRET,
      { expiresIn: "3d" }
    );
    console.log("🔑 Token generato");

    (await cookies()).set({
      name: "AuthToken",
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 3 * 24 * 60 * 60,
    });
    console.log("🍪 Cookie impostato");

    return NextResponse.json({
      success: true,
      message: "New password is saved!"
    });
  } catch (err: any) {
    console.error("❌ Errore finale:", err);
    return NextResponse.json({
      success: false,
      message: `Errore interno: ${err.message}`
    }, { status: 500 });
  }
}
