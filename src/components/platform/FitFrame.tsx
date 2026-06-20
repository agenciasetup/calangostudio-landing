"use client";
import React, { useEffect, useRef, useState } from "react";

/**
 * FitFrame — scales its child to fit the parent container without scrolling.
 *
 * The child declares a fixed natural width (e.g. 1180px) and a content-driven
 * height. FitFrame measures both the container and the child and applies
 * transform: scale(s) with transform-origin: center, so the whole mock fits
 * the available space with NO scroll anywhere.
 *
 * Because the forge animation swaps steps of DIFFERENT heights, FitFrame:
 *   1. Observes BOTH the container and the child (re-measures on either change).
 *   2. Locks the scale to the LARGEST size seen, so the frame stays ONE fixed
 *      size across animation steps (no zoom-in/jumping) and never clips.
 *
 * Upscale is capped at `maxScale` (default 1.1). Downscale is unlimited.
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
  const maxSize = useRef({ w: 0, h: 0 });
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
      if (iW === 0 || iH === 0 || cW === 0 || cH === 0) return;
      // Lock to the largest content seen so the scale never jumps between
      // animation steps of different heights — one fixed size, no clipping.
      maxSize.current.w = Math.max(maxSize.current.w, iW);
      maxSize.current.h = Math.max(maxSize.current.h, iH);
      const s = Math.min(cW / maxSize.current.w, cH / maxSize.current.h, maxScale);
      setScale(s);
    }

    measure();

    // Re-measure on container resize AND on child content-size changes.
    const ro = new ResizeObserver(measure);
    ro.observe(container);
    ro.observe(inner);

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
          flexShrink: 0,
        }}
      >
        {children}
      </div>
    </div>
  );
}
