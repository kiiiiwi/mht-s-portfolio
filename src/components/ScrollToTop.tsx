"use client";

import React from "react";
import { ToggleButton } from "@once-ui-system/core";

export const ScrollToTop: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <ToggleButton
      prefixIcon="arrowUp"
      onClick={scrollToTop}
      aria-label="返回页面顶部"
    />
  );
};
