import { useRef, useEffect, ReactNode, ComponentPropsWithoutRef } from "react";

interface SimpleMarqueeProps
  extends Omit<ComponentPropsWithoutRef<"div">, "children"> {
  children: ReactNode;
  /** px per second */
  speed?: number;
  /** pause on hover? */
  pauseOnHover?: boolean;
  /** gap between items, in rem */
  gapRem?: number;
}

export function SimpleMarquee({
  children,
  speed = 50,
  pauseOnHover = true,
  gapRem = 1,
  className = "",
  ...props
}: SimpleMarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // This will hold half the total track‐width:
  const trackHalfWidth = useRef(0);
  // Pause flag inside RAF
  const paused = useRef(false);

  // 1️⃣ Measure full scrollWidth on the track, then halve it
  useEffect(() => {
    if (!trackRef.current) return;
    const update = () => {
      const full = trackRef.current!.scrollWidth;
      trackHalfWidth.current = full / 2;
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(trackRef.current);
    return () => ro.disconnect();
  }, [children, gapRem]);

  // 2️⃣ RAF loop
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let last = performance.now();
    let frameId: number;
    const step = (now: number) => {
      if (!paused.current) {
        const dt = now - last;
        last = now;
        const w = trackHalfWidth.current;
        if (w > 0) {
          container.scrollLeft =
            (container.scrollLeft + (speed * dt) / 1000) % w;
        }
      } else {
        last = now; // reset timestamp when paused
      }
      frameId = requestAnimationFrame(step);
    };
    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [speed]);

  return (
    <div
      {...props}
      ref={containerRef}
      className={`relative overflow-hidden whitespace-nowrap ${className}`}
      onMouseEnter={() => (paused.current = pauseOnHover)}
      onMouseLeave={() => (paused.current = false)}
    >
      <div
        ref={trackRef}
        className="inline-flex flex-nowrap items-center"
        style={{ gap: `${gapRem}rem` }}
        aria-hidden={false}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
