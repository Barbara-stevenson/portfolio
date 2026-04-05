import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Barbara — Product Designer",
  description:
    "I'm Barbara, a product designer innovating unique experiences & streamlining complex systems.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Cabinet Grotesk — primary body/heading font (Fontshare) */}
        <link
          href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@400,500,700&display=swap"
          rel="stylesheet"
        />
        {/* Mango Grotesque — self-hosted via @font-face in globals.css */}
      </head>
      <body className="font-sans bg-[#1A1A1A] overflow-x-hidden">{children}</body>
    </html>
  );
}
