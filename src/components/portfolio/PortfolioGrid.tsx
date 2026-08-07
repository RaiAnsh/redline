"use client";

import { useMemo, useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { cn } from "@/lib/cn";
import { allCategories, type Project, type ProjectCategory } from "@/data/projects";

export function PortfolioGrid({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<ProjectCategory[]>([]);

  const filtered = useMemo(() => {
    if (active.length === 0) return projects;
    return projects.filter((p) => p.categories.some((c) => active.includes(c)));
  }, [active, projects]);

  function toggle(category: ProjectCategory) {
    setActive((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    );
  }

  return (
    <div>
      <div
        role="group"
        aria-label="Filter projects by category"
        className="flex flex-wrap gap-3 border-b border-brand-line pb-10"
      >
        <button
          type="button"
          onClick={() => setActive([])}
          aria-pressed={active.length === 0}
          className={cn(
            "min-h-[44px] border px-4 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red",
            active.length === 0
              ? "border-brand-red bg-brand-red text-brand-white"
              : "border-brand-line text-brand-silver hover:border-brand-white",
          )}
        >
          All Projects
        </button>
        {allCategories.map((category) => {
          const isActive = active.includes(category);
          return (
            <button
              key={category}
              type="button"
              onClick={() => toggle(category)}
              aria-pressed={isActive}
              className={cn(
                "min-h-[44px] border px-4 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red",
                isActive
                  ? "border-brand-red bg-brand-red text-brand-white"
                  : "border-brand-line text-brand-silver hover:border-brand-white",
              )}
            >
              {category}
            </button>
          );
        })}
      </div>

      {filtered.length > 0 ? (
        <div className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <p className="mt-14 text-sm text-brand-grey">
          No projects match that combination of filters yet.
        </p>
      )}
    </div>
  );
}
