import type { Metadata } from "next";

const description =
  "Scaling a digital pharmacy across marketplace, customer portal and admin: a prescription gate kept but given three routes forward, metered guest checkout, and loan and insurance as real payment paths. +16% checkout conversion.";

export const metadata: Metadata = {
  title: "eMedic — scaling a digital pharmacy",
  description,
  alternates: { canonical: "/case-studies/emedic" },
  openGraph: { title: "eMedic — scaling a digital pharmacy", description, url: "/case-studies/emedic" },
  twitter: { title: "eMedic — scaling a digital pharmacy", description },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
