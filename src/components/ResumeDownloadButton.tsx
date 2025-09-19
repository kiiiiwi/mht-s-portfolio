"use client";

import { Button } from "@once-ui-system/core";

export function ResumeDownloadButton() {
  return (
    <Button
      href="/resume/resume.pdf"
      target="_blank"
      variant="primary"
      size="m"
      prefixIcon="download"
      style={{
        marginTop: "16px",
        backgroundColor: "#333333",
        color: "#ffffff",
        border: "none",
        borderRadius: "8px",
        padding: "12px 24px",
        fontWeight: "500",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        transition: "all 0.2s ease",
        cursor: "pointer",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
      }}
      onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
        e.currentTarget.style.backgroundColor = "#c5f5fe";
        e.currentTarget.style.transform = "translateY(-1px)";
      }}
      onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
        e.currentTarget.style.backgroundColor = "#333333";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      下载简历
    </Button>
  );
}
