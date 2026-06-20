import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Real Madrid International | Govt. Approved Recruiting & Travel Agency",
  description: "RL-2113 | Professional Manpower Recruitment and Travel Services in Bangladesh.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${Geist.variable} ${Geist_Mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}