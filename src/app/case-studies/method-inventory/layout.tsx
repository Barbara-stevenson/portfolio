import type { Metadata } from "next";

const description =
  "An operational inventory experience for small product businesses inside Method CRM — research run by a custom AI agent, a locations-not-warehouses scope decision, pick-pack-ship, RBAC, a governed design system, and an AI strategy.";

export const metadata: Metadata = {
  title: "Method Inventory — operational inventory at Method CRM",
  description,
  alternates: { canonical: "/case-studies/method-inventory" },
  openGraph: {
    title: "Method Inventory — operational inventory at Method CRM",
    description,
    url: "/case-studies/method-inventory",
  },
  twitter: {
    title: "Method Inventory — operational inventory at Method CRM",
    description,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
