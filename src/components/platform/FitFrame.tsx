"use client";
import React, { useEffect, useRef, useState } from "react";

/**
 * FitFrame — scales its fixed-size child to fill the parent container.
 *
 * The child (PlatformChrome) is a FIXED 1320×820 px frame with overflow:hidden,
 * so only the first fold is visible — content is NOT scrollable and NOT scaled
 * down to fit. FitFrame simply scales that fixed frame to fill the available
 * container space using CSS transform: scale(s).
 *
 * Scale formula: s = Math.min(containerW / childW, containerH / childH, maxScale)
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
      // Child is fixed-size (1320×820), so we scale directly from current dims.
      const s = Math.min(cW / iW, cH / iH, maxScale);
      setScale(s);
    }

    measure();

    // Re-measure only on container resize (child is fixed size).
    const ro = new ResizeObserver(measure);
    ro.observe(container);

    return () => ro.disconnect();
  }, [maxScale]);

  return (
    <div
      ref={containerRef}
      className={className}
      aria-hidden="true"
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
