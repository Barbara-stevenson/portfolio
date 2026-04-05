"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import TestimonialCard, { Testimonial } from "@/components/TestimonialCard";

interface TestimonialSliderProps {
  testimonials: Testimonial[];
  /** Auto-advance interval in ms. Set to 0 to disable. */
  autoAdvanceMs?: number;
  /** Notify parent whenever the active index changes. */
  onIndexChange?: (index: number) => void;
}

/**
 * Horizontal carousel showing one testimonial card at a time.
 *
 * Behavior (per spec):
 *  - transform-based horizontal slide
 *  - outgoing card moves left, incoming card enters from the right
 *  - duration ~400ms with restrained easing
 *  - stable height across slides
 *  - auto-advance on a gentle timer (pauses on hover)
 *  - touch swipe support
 *  - subtle opacity as secondary support, transform primary
 *  - cards are NOT individually clickable to switch slides
 *  - dot pagination below (click-to-jump supported)
 */
export default function TestimonialSlider({
  testimonials,
  autoAdvanceMs = 6000,
  onIndexChange,
}: TestimonialSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  // Notify parent about index changes (for synced sidebar portrait, etc.)
  useEffect(() => {
    onIndexChange?.(activeIndex);
  }, [activeIndex, onIndexChange]);
  const [isPaused, setIsPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);
  const touchDeltaX = useRef(0);

  const goTo = useCallback(
    (index: number) => {
      const normalized =
        ((index % testimonials.length) + testimonials.length) %
        testimonials.length;
      setActiveIndex(normalized);
    },
    [testimonials.length]
  );

  const next = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);

  // Auto-advance
  useEffect(() => {
    if (!autoAdvanceMs || isPaused) return;
    const id = window.setTimeout(next, autoAdvanceMs);
    return () => window.clearTimeout(id);
  }, [activeIndex, isPaused, autoAdvanceMs, next]);

  // Touch handlers
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current == null) return;
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };
  const onTouchEnd = () => {
    const delta = touchDeltaX.current;
    touchStartX.current = null;
    touchDeltaX.current = 0;
    const SWIPE_THRESHOLD = 50;
    if (delta > SWIPE_THRESHOLD) goTo(activeIndex - 1);
    else if (delta < -SWIPE_THRESHOLD) goTo(activeIndex + 1);
  };

  return (
    <div
      className="flex flex-col items-center gap-8 w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Track viewport — fixed width, clips horizontally moving cards */}
      <div
        className="relative w-full overflow-hidden"
        aria-roledescription="carousel"
        aria-label="Testimonials"
      >
        <div
          ref={trackRef}
          className="flex w-full"
          style={{
            transform: `translateX(-${activeIndex * 100}%)`,
            transition: "transform 420ms cubic-bezier(0.22, 0.61, 0.36, 1)",
          }}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              className="shrink-0 grow-0 basis-full min-w-0 w-full"
              aria-hidden={i !== activeIndex}
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${testimonials.length}`}
              style={{
                transition: "opacity 420ms ease-out",
                opacity: i === activeIndex ? 1 : 0.55,
              }}
            >
              <TestimonialCard testimonial={t} />
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex items-center gap-4" role="tablist" aria-label="Choose testimonial">
        {testimonials.map((t, i) => {
          const isActive = i === activeIndex;
          return (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => goTo(i)}
              className="w-[14px] h-[14px] rounded-full transition-all duration-300 ease-out"
              style={{
                backgroundColor: isActive ? "#CA9550" : "rgba(17,18,17,0.25)",
                transform: isActive ? "scale(1.15)" : "scale(1)",
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
