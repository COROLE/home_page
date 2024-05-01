import type { Metadata } from "next";
import { Lilita_One } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "@/components/Footer";
import Symbol from "@/components/Symbol";
import Head from "next/head"

const lilitaOne = Lilita_One({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "COROLE",
  description: "Homepage of Inc.COROLE",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="ja">
   
      <Head>
      <link rel="icon" href="static/favicon.ico"/>
      </Head>
   
      <body className={lilitaOne.className}>
        <Header />
        {children}
        <Symbol />
        <Footer />
      </body>
    </html>
  );
}
