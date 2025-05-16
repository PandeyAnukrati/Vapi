
import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";
import {Toaster} from "sonner";


const monaSans = Mona_Sans({
    variable: "--font-mona-sans",
    subsets: ["latin"],
});

// ✅ Exporting metadata (optional but allowed)
export const metadata: Metadata = {
    title: "VocaBot",
    description: "A smart AI platform to help you practice mock interviews.",
};

// ✅ THIS is the default export the error is talking about
export default function RootLayout({
                                       children,
                                   }:Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
        <body className={`${monaSans.className} antialiased pattern `}>
        {children}
        <Toaster />

        </body>
        </html>
    );
}