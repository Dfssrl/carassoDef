import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {
    const storedCookies = await cookies();
    storedCookies.set('token', '', {
        httpOnly: true,
        secure: process.env.NODE_ENV == 'production',
        sameSite: 'lax',
        path: '/',
        maxAge: 0,
    });

    return NextResponse.json({
        success: true,
        message: 'Logout effettuato',
    });
}