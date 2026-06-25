import type { Metadata } from "next";

const description =
  "Unifying five financial segments into one consumer-grade investing platform — +45% cross-segment engagement, 52→76% registration completion, 8→23% cross-sell, and a design system across four teams.";

export const metadata: Metadata = {
  title: "ARM ONE — five financial products, one platform",
  description,
  alternates: { canonical: "/case-studies/arm" },
  openGraph: {
    title: "ARM ONE — five financial products, one platform",
    description,
    url: "/case-studies/arm",
  },
  twitter: {
    title: "ARM ONE — five financial products, one platform",
    description,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
