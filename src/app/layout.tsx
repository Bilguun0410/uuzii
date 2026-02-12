import type { Metadata } from "next";
import { Delius } from "next/font/google";
import "./globals.css";

const delius = Delius({
  variable: "--font-delius",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "To Uuzii",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${delius.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
