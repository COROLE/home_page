import type { Metadata } from "next";
import { Lilita_One } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "@/components/Footer";
import Symbol from "@/components/Symbol";
import Head from "next/head"
import SizedBox from "@/components/SizedBox";

const lilitaOne = Lilita_One({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "株式会社COROLE(コロール)",
  description: "2024年3月に設立され、エデュテイメント(教育娯楽)の領域にAIを活用するという革新的なアプローチを実施しています。学生AIスタートアップ COROLE Inc",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="ja">
   
      <Head>
      <link rel="icon" href="static/favicon.ico"/>
      </Head>
   
      <body className={lilitaOne.className}>
        <Header />
        <SizedBox />
        {children}
        <Symbol />
        <Footer />
      </body>
    </html>
  );
}
