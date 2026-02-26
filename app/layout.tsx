import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const siteUrl = "https://rohitmangtani.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Rohit Mangtani",
    template: "%s | Rohit Mangtani",
  },
  description: "Essays, research, and projects by Rohit Mangtani.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Rohit Mangtani",
    title: "Rohit Mangtani",
    description: "Essays, research, and projects by Rohit Mangtani.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rohit Mangtani",
    description: "Essays, research, and projects by Rohit Mangtani.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sora.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
