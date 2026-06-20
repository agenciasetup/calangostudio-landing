"use client";
import React, { useEffect, useRef, useState } from "react";

/**
 * FitFrame — scales its child to fit the parent container without scrolling.
 *
 * The child declares a fixed natural width (e.g. 1180px) and a content-driven
 * height. FitFrame measures both the container and the child, computes
 * s = min(containerW/childW, containerH/childH), and applies
 * transform: scale(s) with transform-origin: center.
 *
 * Upscale is capped at 1.1 so the mock never looks blown-up on huge screens.
 * Downscale has no limit — FitFrame will shrink the child as much as needed.
 *
 * Usage:
 *   <FitFrame className="h-full w-full">
 *     <SomeMockComponent />
 *   </FitFrame>
 */

interface FitFrameProps {
  children: React.ReactNode;
  /** Extra class names applied to the outer container div */
  className?: string;
  /** Maximum upscale factor. Default 1.1 */
  maxScale?: number;
}

export function FitFrame({ children, className = "", maxScale = 1.1 }: FitFrameProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const container = containerRef.current;
    const inner = innerRef.current;
    if (!container || !inner) return;

    function measure() {
      if (!container || !inner) return;
      const cW = container.offsetWidth;
      const cH = container.offsetHeight;
      const iW = inner.offsetWidth;
      const iH = inner.offsetHeight;
      if (iW === 0 || iH === 0) return;
      const s = Math.min(cW / iW, cH / iH, maxScale);
      setScale(s);
    }

    // Measure once immediately (layout should be complete in useEffect)
    measure();

    // Re-measure whenever container size changes
    const ro = new ResizeObserver(measure);
    ro.observe(container);

    return () => ro.disconnect();
  }, [maxScale]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        width: "100%",
        height: "100%",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        ref={innerRef}
        style={{
          transform: `scale(${scale})`,
          transformOrigin: "center",
          // The child content defines its own size; we must NOT constrain it here
          flexShrink: 0,
        }}
      >
        {children}
      </div>
    </div>
  );
}
