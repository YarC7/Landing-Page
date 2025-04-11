import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import localFont from "next/font/local";
import { Inter, Roboto_Serif } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { WixClientContextProvider } from "@/context/wixContext";
import StoreProvider from "./StoreProvider";
import Footer from "@/components/Footer";
import { ImageContextProvider } from "@/context/imageContext";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
const robotoSerif = Roboto_Serif({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
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
        <body className={robotoSerif.className}>
          <StoreProvider>
            <WixClientContextProvider>
              <Navbar />
              <ImageContextProvider>
                {children}
                <SpeedInsights />
                <Analytics />
              </ImageContextProvider>
              {/* <Footer/> */}
            </WixClientContextProvider>
          </StoreProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
