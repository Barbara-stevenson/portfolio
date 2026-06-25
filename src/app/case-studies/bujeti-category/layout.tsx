import type { Metadata } from "next";

const description = "Enabling better category management of expenses in Bujeti.";

export const metadata: Metadata = {
  title: "Bujeti — expense category management",
  description,
  alternates: { canonical: "/case-studies/bujeti-category" },
  openGraph: { title: "Bujeti — expense category management", description, url: "/case-studies/bujeti-category" },
  twitter: { title: "Bujeti — expense category management", description },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
