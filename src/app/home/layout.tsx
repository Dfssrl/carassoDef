import { Metadata } from "next";

export const metadata: Metadata = {
    title: "homepage-application",
    description: "homepage to handle appointments and calls",
};

export const HomeLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return <div>{children}</div>;
};
