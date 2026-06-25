import type { Metadata } from "next";

const description = "Scaling a digital pharmacy across marketplace, admin, and customer experiences.";

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
