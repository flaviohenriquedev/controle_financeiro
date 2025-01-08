import type {Metadata} from "next";
import localFont from "next/font/local";
import "./globals.css";
import {Providers} from "@/providers";
import {Toaster} from "react-hot-toast";
import {ReactNode} from "react";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Controle",
    description: "Controle ",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="pt-BR">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased w-screen h-screen`}
        >
        <Providers>
            <Toaster position="top-right" />
            {children}
        </Providers>
        </body>
        </html>
    );
}
