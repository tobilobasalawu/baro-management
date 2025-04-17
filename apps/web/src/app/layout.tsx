import type { Metadata } from "next";
import { Cinzel } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({ 
  subsets: ["latin"], 
  weight: ["400", "700"]
});

export const metadata: Metadata = {
  title: "Baro Management",
  description: "Baro Management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cinzel.className}>
        {children}
      </body>
    </html>
  );
}
