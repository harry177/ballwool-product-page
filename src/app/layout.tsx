import type { Metadata } from "next";
import { Geologica } from "next/font/google";
import { AsideSection } from "@/components/AsideSection";
import { asideIconsData } from "@/data/asideIconsData";
import "./globals.css";

const geologica = Geologica({
  weight: ["200", "300", "400"],
  subsets: ["latin"],
  variable: "--font-geologica",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geologica.variable} antialiased`}
      >
        <main className="flex flex-1">
          <AsideSection icons={asideIconsData} />
          <div className="flex flex-1 gap-[16px]">{children}</div>
        </main>
      </body>
    </html>
  );
}
