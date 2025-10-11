import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "carasso-project",
    description: "web app to handle a call center",
}

export const LoginLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return <div>{children}</div>;
};
