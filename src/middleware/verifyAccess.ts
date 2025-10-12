// src/middleware.ts
import jwt from "jsonwebtoken";

import { NextRequest, NextResponse } from "next/server";

const JWT_SECRET = process.env.JWT_SECRET!;

export function middleware(req: NextRequest) {
    const token = req.cookies.get("authToken")?.value;

    if (!token) {
        return NextResponse.redirect(new URL("/login", req.url));
    }

    try {
        jwt.verify(token, JWT_SECRET);
        return NextResponse.next();
    } catch {
        return NextResponse.redirect(new URL("/login", req.url));
    }
}

export const config = {
    matcher: ["/dashboard/:path*"], // proteggi tutte le sotto-route
};
