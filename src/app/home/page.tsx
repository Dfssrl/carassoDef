"use client";
import ClientWrapper from "./clientWrapper";

export default function HomePage() {
  let isAuthenticated = false;

  return <ClientWrapper isAuthenticated={isAuthenticated} />;
}
