// src/app/dashboard/layout.tsx
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { redirect } from "next/navigation";

const JWT_SECRET = process.env.JWT_SECRET!;

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const token = (await cookies()).get("authToken")?.value;

  // if (!token || !jwt.verify(token, JWT_SECRET)) {
  //   redirect("/login");
  // }

  return (
    <>
      {children}
    </>
  );
}
