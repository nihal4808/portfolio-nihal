import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // Ensure you have this or Tailwind injection

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Nihal | Portfolio",
    description: "Building digital products, brands, and experiences.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.className} antialiased`}>
                {children}
            </body>
        </html>
    );
}
