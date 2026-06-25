import type { Metadata } from "next";

const description = "Redesigning the LifeBank mobile application.";

export const metadata: Metadata = {
  title: "LifeBank — mobile app redesign",
  description,
  alternates: { canonical: "/case-studies/life-bank" },
  openGraph: { title: "LifeBank — mobile app redesign", description, url: "/case-studies/life-bank" },
  twitter: { title: "LifeBank — mobile app redesign", description },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
