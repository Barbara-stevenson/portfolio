import type { Metadata } from "next";

const description =
  "Redefining an expense category from a label into a spend control: limits with a declared buffer, a categorisation rules engine, and three creation paths including CSV import. 50%+ improvement in expense data quality.";

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
