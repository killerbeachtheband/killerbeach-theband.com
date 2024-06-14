import { MenuProvider } from "@/hooks/use-menu";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const futura = localFont({
  src: [
    {
      path: "../assets/fonts/futura/futura-condensed-medium.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/futura/futura-medium.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Killer Beach Official Website",
  description: "The official Killer Beach website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={futura.className}>
      <body className="bg-neutral-950 text-neutral-200">
        <MenuProvider>{children}</MenuProvider>
      </body>
    </html>
  );
}
