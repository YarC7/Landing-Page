import type { Metadata } from "next";
import { Inter, Roboto_Serif } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import StoreProvider from "./StoreProvider";
import Footer from "@/components/Footer";
import { ImageContextProvider } from "@/context/imageContext";
import Script from 'next/script';

// Tối ưu font loading
const robotoSerif = Roboto_Serif({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ['system-ui', 'arial'],
  // Thêm font-display: swap để tránh FOIT
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: "Delta Atelier",
  description: "We do Architecture",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
            rel="preconnect"
            href="https://fonts.googleapis.com"
            crossOrigin="anonymous"
          />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
        </head>
        <body className={robotoSerif.className}>
          <StoreProvider>
            <Navbar />
              <ImageContextProvider>
                {children}
              </ImageContextProvider>
          </StoreProvider>
        </body>
      </html>
  );
}
