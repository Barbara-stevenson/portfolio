import type { Metadata } from "next";

const description = "Thinking big: the Zikoko website experience.";

export const metadata: Metadata = {
  title: "Zikoko — the website experience",
  description,
  alternates: { canonical: "/case-studies/zikoko" },
  openGraph: { title: "Zikoko — the website experience", description, url: "/case-studies/zikoko" },
  twitter: { title: "Zikoko — the website experience", description },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
