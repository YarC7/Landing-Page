import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import localFont from "next/font/local";
import { Inter, Roboto_Serif } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
// import { WixClientContextProvider } from "@/context/wixContext";
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
    <ClerkProvider>
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
            {/* <WixClientContextProvider> */}
              <ImageContextProvider>
                {children}

              </ImageContextProvider>
              {/* <Footer/> */}
            {/* </WixClientContextProvider> */}
          </StoreProvider>
          {/* Load non-critical scripts with lazyOnload */}
          <Script
            src="https://maps.googleapis.com/maps/api/js"
            strategy="lazyOnload"
          />
        </body>
      </html>
    </ClerkProvider>
  );
}
