import Link from "next/link";
import Image from "next/image";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { Badge } from "@/components/ui/Badge";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  const cover = project.media[0];
  const coverSrc = cover?.type === "video" ? cover.poster : cover?.src;

  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className="group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-red"
    >
      <div className="relative overflow-hidden bg-brand-charcoal">
        <div className="relative aspect-[4/5] transition-transform duration-700 ease-out group-hover:scale-[1.04]">
          {coverSrc ? (
            <Image
              src={coverSrc}
              alt={`${project.name}, ${project.location}`}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          ) : (
            <MediaPlaceholder label="Photography pending" aspect="aspect-[4/5]" />
          )}
        </div>
        {cover?.type === "video" ? (
          <span
            aria-hidden
            className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/10"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-brand-white/80 bg-black/30 backdrop-blur-sm">
              <span className="ml-0.5 h-0 w-0 border-y-[7px] border-l-[11px] border-y-transparent border-l-brand-white" />
            </span>
          </span>
        ) : null}
        {project.isPlaceholder ? (
          <span className="absolute left-4 top-4 bg-brand-red px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-brand-white">
            Sample Project
          </span>
        ) : null}
      </div>
      <div className="mt-4">
        <div className="flex flex-wrap gap-2">
          {project.categories.map((c) => (
            <Badge key={c}>{c}</Badge>
          ))}
        </div>
        <h3 className="text-display-3 mt-3 text-brand-white">{project.name}</h3>
        <p className="mt-1 text-sm text-brand-grey">{project.location}</p>
        {project.isPlaceholder ? (
          <p className="mt-1 text-xs italic text-brand-grey">{project.placeholderNote}</p>
        ) : null}
      </div>
    </Link>
  );
}
