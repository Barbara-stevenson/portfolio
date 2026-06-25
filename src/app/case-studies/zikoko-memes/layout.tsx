import type { Metadata } from "next";

const description = "Building the largest repository of memes in Africa.";

export const metadata: Metadata = {
  title: "Zikoko Memes — Africa's largest meme repository",
  description,
  alternates: { canonical: "/case-studies/zikoko-memes" },
  openGraph: { title: "Zikoko Memes — Africa's largest meme repository", description, url: "/case-studies/zikoko-memes" },
  twitter: { title: "Zikoko Memes — Africa's largest meme repository", description },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
