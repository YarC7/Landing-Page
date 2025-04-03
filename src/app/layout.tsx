import type { Metadata } from "next";
import { Inter,Roboto_Serif  } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { WixClientContextProvider } from "@/context/wixContext";
import StoreProvider from "./StoreProvider";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const robotoSerif = Roboto_Serif({
  weight: ['400', '700'],
  subsets: ['latin'],
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
      <body className={robotoSerif.className}>
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
