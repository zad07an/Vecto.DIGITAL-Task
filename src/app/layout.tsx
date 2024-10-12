import { MainMenu } from "@/components/organisms/MainMenu";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Vecto.DIGITAL Task",
  description: "Created by Aram Zadoyan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <main className="w-full max-w-[1920px] mx-auto h-dvh flex relative">
          <MainMenu />
          {children}
        </main>
      </body>
    </html>
  );
}
