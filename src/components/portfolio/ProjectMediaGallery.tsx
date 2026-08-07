"use client";

import { useState } from "react";
import Image from "next/image";
import { Lightbox } from "@/components/ui/Lightbox";
import type { ProjectMedia } from "@/data/projects";

function PlayGlyph() {
  return (
    <span
      aria-hidden
      className="flex h-12 w-12 items-center justify-center rounded-full border border-brand-white/70 bg-black/30 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110"
    >
      <span className="ml-0.5 h-0 w-0 border-y-[7px] border-l-[11px] border-y-transparent border-l-brand-white" />
    </span>
  );
}

export function ProjectMediaGallery({
  media,
  projectName,
}: {
  media: ProjectMedia[];
  projectName: string;
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const active = activeIndex !== null ? media[activeIndex] : null;

  return (
    <div>
      <div className="grid gap-6 sm:grid-cols-2">
        {media.map((item, i) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setActiveIndex(i)}
            className="group relative block aspect-[4/5] w-full overflow-hidden bg-brand-charcoal text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-black"
            aria-label={`View ${item.type === "video" ? "video" : "photo"} ${i + 1} of ${projectName}`}
          >
            <Image
              src={item.type === "video" ? (item.poster ?? item.src) : item.src}
              alt={`${projectName}, photo ${i + 1}`}
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
            {item.type === "video" ? (
              <>
                <span aria-hidden className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <PlayGlyph />
                </div>
              </>
            ) : null}
          </button>
        ))}
      </div>

      <Lightbox
        open={active !== null}
        onClose={() => setActiveIndex(null)}
        label={`${projectName} media`}
      >
        {active ? (
          active.type === "video" ? (
            <video
              key={active.src}
              src={active.src}
              poster={active.poster}
              className="max-h-[85vh] w-auto max-w-[90vw]"
              style={{ aspectRatio: "9 / 16" }}
              controls
              autoPlay
              muted
              loop
              playsInline
            />
          ) : (
            <div className="relative max-h-[85vh] w-[min(90vw,700px)] aspect-[4/5]">
              <Image
                src={active.src}
                alt={`${projectName} photo`}
                fill
                sizes="90vw"
                className="object-contain"
              />
            </div>
          )
        ) : null}
      </Lightbox>
    </div>
  );
}
