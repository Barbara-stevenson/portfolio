import type { Metadata } from "next";

const description = "Revamping the Bujeti onboarding experience.";

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
