/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import type { Metadata } from "next";
import {
  Bebas_Neue as BebasNeue,
  Inter,
  Open_Sans as OpenSans,
  Poppins,
  Raleway,
  Roboto,
} from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: "400" });
const raleway = Raleway({ subsets: ["latin"], weight: "400" });
const roboto = Roboto({ subsets: ["latin"], weight: "400" });
const bebasNeue = BebasNeue({ subsets: ["latin"], weight: "400" });
const openSans = OpenSans({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Restaurant",
  description: "Restaurant website built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
