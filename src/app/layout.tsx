import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const body = Outfit({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "당신의 마법 성향은? | NOCTORA",
  description: "16개의 질문으로 알아보는 나만의 Witchcraft Type.",
  openGraph: {
    title: "당신의 마법 성향은? | NOCTORA",
    description: "16개의 질문으로 알아보는 나만의 Witchcraft Type.",
    type: "website",
    locale: "ko_KR",
    siteName: "NOCTORA",
  },
  twitter: {
    card: "summary_large_image",
    title: "당신의 마법 성향은? | NOCTORA",
    description: "16개의 질문으로 알아보는 나만의 Witchcraft Type.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#07080a",
};

/**
 * Root layout for the WitchTest app.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="page-shell min-h-full flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
