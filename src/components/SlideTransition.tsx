"use client";

import {
  createContext,
  useContext,
  useRef,
  useCallback,
  useEffect,
  useState,
} from "react";
import { useRouter, usePathname } from "next/navigation";

/* ── Context ── */

interface SlideNavContextValue {
  /** Call this instead of router.push for case study navigation */
  slideNavigate: (href: string, direction: "left" | "right") => void;
}

const SlideNavContext = createContext<SlideNavContextValue>({
  slideNavigate: () => {},
});

export const useSlideNav = () => useContext(SlideNavContext);

/* ── Transition wrapper ── */

const DURATION = 300; // ms — matches Figma

export function SlideTransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);
  const ghostRef = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const directionRef = useRef<"left" | "right">("right");
  const prevPathnameRef = useRef(pathname);

  const slideNavigate = useCallback(
    (href: string, direction: "left" | "right") => {
      if (isAnimating) return;

      const container = containerRef.current;
      const ghost = ghostRef.current;
      if (!container || !ghost) {
        router.push(href);
        return;
      }

      // 1. Store direction
      directionRef.current = direction;

      // 2. Clone current page DOM into the ghost layer
      ghost.innerHTML = container.innerHTML;
      ghost.style.display = "block";
      ghost.style.position = "absolute";
      ghost.style.top = "0";
      ghost.style.left = "0";
      ghost.style.width = "100%";
      ghost.style.height = "100%";
      ghost.style.zIndex = "1";
      ghost.style.transform = "translateX(0)";
      ghost.style.transition = "none";
      ghost.scrollTop = container.scrollTop;

      // 3. Prepare container for incoming page (off-screen)
      const startX = direction === "right" ? "100%" : "-100%";
      container.style.transition = "none";
      container.style.transform = `translateX(${startX})`;
      container.style.zIndex = "2";
      container.style.position = "relative";

      setIsAnimating(true);

      // 4. Navigate — React will re-render children with the new page
      router.push(href);
    },
    [router, isAnimating]
  );

  // When pathname changes (new page rendered), slide the container in
  useEffect(() => {
    if (pathname === prevPathnameRef.current) return;
    prevPathnameRef.current = pathname;

    const container = containerRef.current;
    const ghost = ghostRef.current;

    if (!container || !ghost || !isAnimating) return;

    // Force a reflow so the browser registers the off-screen position
    void container.offsetHeight;

    // 5. Animate container (new page) sliding into view
    container.style.transition = `transform ${DURATION}ms ease-out`;
    container.style.transform = "translateX(0)";

    // 6. Reset scroll to top
    container.scrollTop = 0;
    window.scrollTo(0, 0);

    // 7. Clean up after animation
    const timer = setTimeout(() => {
      ghost.style.display = "none";
      ghost.innerHTML = "";
      container.style.transition = "";
      container.style.transform = "";
      container.style.zIndex = "";
      container.style.position = "";
      setIsAnimating(false);
    }, DURATION + 20);

    return () => clearTimeout(timer);
  }, [pathname, isAnimating]);

  return (
    <SlideNavContext.Provider value={{ slideNavigate }}>
      <div
        style={{
          position: "relative",
          width: "100%",
          minHeight: "100vh",
        }}
      >
        {/* Ghost layer — holds a clone of the outgoing page during transition */}
        <div
          ref={ghostRef}
          aria-hidden
          style={{ display: "none", pointerEvents: "none" }}
        />

        {/* Live content — the actual page */}
        <div ref={containerRef}>{children}</div>
      </div>
    </SlideNavContext.Provider>
  );
}
