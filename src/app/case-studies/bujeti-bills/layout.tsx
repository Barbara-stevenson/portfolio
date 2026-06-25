import type { Metadata } from "next";

const description = "A centralized system for managing and tracking recurring expenses in Bujeti.";

export const metadata: Metadata = {
  title: "Bujeti Bills — recurring expense tracking",
  description,
  alternates: { canonical: "/case-studies/bujeti-bills" },
  openGraph: { title: "Bujeti Bills — recurring expense tracking", description, url: "/case-studies/bujeti-bills" },
  twitter: { title: "Bujeti Bills — recurring expense tracking", description },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
