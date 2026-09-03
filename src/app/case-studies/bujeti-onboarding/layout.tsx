import type { Metadata } from "next";

const description =
  "Turning a document wall into a three-rung access ladder: sign up and you are in, one certificate opens basic features, full KYC opens the regulated ones, and the ask arrives when someone reaches for a gated feature. +40% subscription conversion.";

export const metadata: Metadata = {
  title: "Bujeti — onboarding redesign",
  description,
  alternates: { canonical: "/case-studies/bujeti-onboarding" },
  openGraph: { title: "Bujeti — onboarding redesign", description, url: "/case-studies/bujeti-onboarding" },
  twitter: { title: "Bujeti — onboarding redesign", description },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
