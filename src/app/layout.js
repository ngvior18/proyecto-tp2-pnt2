"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./Footer";
import Nav from "./Nav";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster position="top-center" />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
