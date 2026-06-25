import type { Metadata } from "next";

const description = "Burning Ram: a celebration of Nigeria's best meat cuisine.";

export const metadata: Metadata = {
  title: "Burning Ram — a celebration of Nigerian cuisine",
  description,
  alternates: { canonical: "/case-studies/burning-ram" },
  openGraph: { title: "Burning Ram — a celebration of Nigerian cuisine", description, url: "/case-studies/burning-ram" },
  twitter: { title: "Burning Ram — a celebration of Nigerian cuisine", description },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
