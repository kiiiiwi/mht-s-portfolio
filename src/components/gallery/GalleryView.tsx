"use client";

import { Media, Grid, Column } from "@once-ui-system/core";
import { gallery } from "@/resources";

export default function GalleryView() {
  return (
    <Column gap="24" fillWidth>
      <Grid columns="2" gap="24" s={{ columns: 1 }}>
        {/* 横向图片 - 占据两列 */}
        {gallery.images
          .filter(image => image.orientation === "horizontal")
          .map((image, index) => (
            <Media
              key={`horizontal-${index}`}
              enlarge
              priority={index < 2}
              sizes="(max-width: 768px) 100vw, 100vw"
              radius="m"
              aspectRatio="16 / 9"
              src={image.src}
              alt={image.alt}
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover"
              }}
            />
          ))}
      </Grid>

      {/* 纵向图片 - 使用4列网格 */}
      <Grid columns="4" gap="24" s={{ columns: 2 }}>
        {gallery.images
          .filter(image => image.orientation === "vertical")
          .map((image, index) => (
            <Media
              key={`vertical-${index}`}
              enlarge
              priority={index < 4}
              sizes="(max-width: 768px) 50vw, 25vw"
              radius="m"
              aspectRatio="3 / 4"
              src={image.src}
              alt={image.alt}
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover"
              }}
            />
          ))}
      </Grid>
    </Column>
  );
}
