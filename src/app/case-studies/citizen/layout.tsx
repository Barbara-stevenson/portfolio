import type { Metadata } from "next";

const description = "A home for policy and governance related content.";

export const metadata: Metadata = {
  title: "Citizen — policy & governance content",
  description,
  alternates: { canonical: "/case-studies/citizen" },
  openGraph: { title: "Citizen — policy & governance content", description, url: "/case-studies/citizen" },
  twitter: { title: "Citizen — policy & governance content", description },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
