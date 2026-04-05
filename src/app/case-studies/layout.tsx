import { SlideTransitionProvider } from "@/components/SlideTransition";

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SlideTransitionProvider>{children}</SlideTransitionProvider>;
}
