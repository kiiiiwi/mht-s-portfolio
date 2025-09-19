"use client";

import { useState } from "react";
import { Media, Button, Flex, Icon } from "@once-ui-system/core";

interface ImageViewerProps {
  src: string;
  alt: string;
  children: React.ReactNode;
}

export function ImageViewer({ src, alt, children }: ImageViewerProps) {
  const [isOpen, setIsOpen] = useState(false);

  const openViewer = () => setIsOpen(true);
  const closeViewer = () => setIsOpen(false);

  return (
    <>
      <div onClick={openViewer} style={{ cursor: "pointer" }}>
        {children}
      </div>

      {isOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
          onClick={closeViewer}
        >
          <Button
            onClick={closeViewer}
            variant="ghost"
            size="m"
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              backgroundColor: "rgba(128, 128, 128, 0.3)",
              borderRadius: "50%",
              width: "48px",
              height: "48px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "none",
              cursor: "pointer",
              zIndex: 10000,
            }}
          >
            <Icon
              name="close"
              size="m"
              style={{ color: "white" }}
            />
          </Button>

          <Media
            src={src}
            alt={alt}
            style={{
              maxWidth: "90vw",
              maxHeight: "90vh",
              objectFit: "contain",
            }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
