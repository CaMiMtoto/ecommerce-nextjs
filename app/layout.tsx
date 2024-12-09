import type {Metadata} from "next";
import "./globals.css";
import {
    Figtree,
} from 'next/font/google'

const nextFont = Figtree({
    weight: ["300", "400", "500", "600", "700", "800", "900"],
    subsets: ['latin'],
    display: 'swap'
});

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${nextFont.className} antialiased`}
        >
        {children}
        </body>
        </html>
    );
}
