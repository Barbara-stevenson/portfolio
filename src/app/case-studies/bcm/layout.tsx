import type { Metadata } from "next";

const description = "Revamping Big Cabal Media's website to promote its African content and storytelling.";

export const metadata: Metadata = {
  title: "Big Cabal Media — website revamp",
  description,
  alternates: { canonical: "/case-studies/bcm" },
  openGraph: { title: "Big Cabal Media — website revamp", description, url: "/case-studies/bcm" },
  twitter: { title: "Big Cabal Media — website revamp", description },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
