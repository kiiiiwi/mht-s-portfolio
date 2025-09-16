"use client";

import { useMemo } from "react";

export function HeadlineEmoji({
  src = "/images/emoji.webm",
  size = 72,
  className,
}: {
  src?: string;
  size?: number;
  className?: string;
}) {
  const stampedSrc = useMemo(() => {
    const rev = Math.floor(Date.now() / 1000);
    const sep = src.includes("?") ? "&" : "?";
    return `${src}${sep}rev=${rev}`;
  }, [src]);

  return (
    <video
      key={stampedSrc}
      src={stampedSrc}
      width={size}
      height={size}
      className={className}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
    />
  );
}


