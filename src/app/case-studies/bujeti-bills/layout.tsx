import type { Metadata } from "next";

const description =
  "Accounts payable inside Bujeti: supplier invoices captured by OCR or email forwarding, then routed through a role-based approval flow. +20% total payment volume.";

export const metadata: Metadata = {
  title: "Bujeti Bills — accounts payable, captured in seconds",
  description,
  alternates: { canonical: "/case-studies/bujeti-bills" },
  openGraph: {
    title: "Bujeti Bills — accounts payable, captured in seconds",
    description,
    url: "/case-studies/bujeti-bills",
  },
  twitter: {
    title: "Bujeti Bills — accounts payable, captured in seconds",
    description,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
