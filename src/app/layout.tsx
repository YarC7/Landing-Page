import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { WixClientContextProvider } from "@/context/wixContext";
import StoreProvider from "./StoreProvider";


const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <StoreProvider>
          <WixClientContextProvider>
            <Navbar />
            {children}
            {/* <Footer/> */}
          </WixClientContextProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
