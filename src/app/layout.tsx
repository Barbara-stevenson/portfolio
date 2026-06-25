import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.barbarastevenson.com"),
  title: {
    default: "Barbara Stevenson — Senior Product Designer",
    template: "%s · Barbara Stevenson",
  },
  description:
    "Senior product designer shipping consumer and B2B products across fintech, B2B SaaS, health tech, and media. Selected case studies and process.",
  keywords: [
    "Barbara Stevenson",
    "Product Designer",
    "Senior Product Designer",
    "UX Designer",
    "Fintech Design",
    "B2B SaaS",
    "Product Design Portfolio",
  ],
  authors: [{ name: "Barbara Stevenson" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Barbara Stevenson",
    url: "https://www.barbarastevenson.com",
    title: "Barbara Stevenson — Senior Product Designer",
    description:
      "Selected case studies across fintech, B2B SaaS, health tech, and media.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Barbara Stevenson — Senior Product Designer",
    description:
      "Selected case studies across fintech, B2B SaaS, health tech, and media.",
  },
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
