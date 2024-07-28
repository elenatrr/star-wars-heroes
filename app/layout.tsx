import { Inter } from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

const starJedi = localFont({
  src: "./ui/fonts/Starjedi.ttf",
  display: "swap",
  variable: '--font-starjedi',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${starJedi.variable}`}>{children}</body>
    </html>
  );
}
