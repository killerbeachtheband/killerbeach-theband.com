import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
