/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";
import ClientWrapper from "./clientWrapper";

export default function HomePage() {
  const isAuthenticated = false;

  return <ClientWrapper isAuthenticated={isAuthenticated} />;
}
