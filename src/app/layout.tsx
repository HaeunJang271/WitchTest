import type { Metadata, Viewport } from "next";
import { Fraunces, Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const body = Noto_Sans_KR({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "당신의 마법 성향은? | CYNTHIA",
  description: "16개의 질문으로 알아보는 나만의 Witchcraft Type.",
  openGraph: {
    title: "당신의 마법 성향은? | CYNTHIA",
    description: "16개의 질문으로 알아보는 나만의 Witchcraft Type.",
    type: "website",
    locale: "ko_KR",
    siteName: "CYNTHIA",
  },
  twitter: {
    card: "summary_large_image",
    title: "당신의 마법 성향은? | CYNTHIA",
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
