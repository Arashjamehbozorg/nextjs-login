import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "پورتال ثبت بیمه",
  description: "صفحه ورود برای درخواست بیمه",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/LogoSmall.png" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
