import type { Metadata } from "next";

const description =
  "Embedding payment processing into Method CRM — a build-vs-partner bake-off, a borrow-the-vault hybrid architecture over Stripe, six native money surfaces, and a staged rollout that took fee revenue from $5.2K to $110K annualised.";

export const metadata: Metadata = {
  title: "Method Pay — embedding payments into Method CRM",
  description,
  alternates: { canonical: "/case-studies/method-pay" },
  openGraph: {
    title: "Method Pay — embedding payments into Method CRM",
    description,
    url: "/case-studies/method-pay",
  },
  twitter: {
    title: "Method Pay — embedding payments into Method CRM",
    description,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
