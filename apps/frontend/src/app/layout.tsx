import type { Metadata } from "next";
import "./globals.css";
import SessionContextProvider from "../context/SessionProvider";

export const metadata: Metadata = {
  title: "Excalibur Clone",
  description: "Excalibur Clone built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SessionContextProvider>{children}</SessionContextProvider>
      </body>
    </html>
  );
}
