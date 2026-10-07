"use client";

import { useEffect, useState } from "react";

export type PageSection = {
  id: string;
  label: string;
  level?: 1 | 2;
};

type PageSectionsNavProps = {
  sections: PageSection[];
};

export function PageSectionsNav({ sections }: PageSectionsNavProps) {
  const [activeId, setActiveId] = useState(sections[0]?.id);

  useEffect(() => {
    const elements = sections
      .map(({ id }) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];

        if (visibleEntry) setActiveId(visibleEntry.target.id);
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [sections]);

  const renderLinks = (onNavigate?: () => void) => (
    <ul className="mt-3 border-t border-white/10 pt-2">
      {sections.map(({ id, label, level = 1 }) => {
        const isActive = activeId === id;

        return (
          <li key={id}>
            <a
              href={`#${id}`}
              onClick={onNavigate}
              className={`block border-l px-3 py-2 text-sm transition-colors ${
                level === 2 ? "ml-3" : ""
              } ${
                isActive
                  ? "border-[#f2f0eb] text-[#f2f0eb]"
                  : "border-transparent text-white/45 hover:text-white/80"
              }`}
            >
              {label}
            </a>
          </li>
        );
      })}
    </ul>
  );

  return (
    <>
      <details className="order-first group rounded-xl border border-white/10 bg-[#111111] lg:hidden">
        <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 text-sm text-white/55 [&::-webkit-details-marker]:hidden">
          <span>In this page</span>
          <span className="text-white/40 transition-transform group-open:rotate-180">⌄</span>
        </summary>
        <div className="px-1 pb-2">{renderLinks()}</div>
      </details>

      <aside className="order-2 sticky top-6 hidden h-fit self-start lg:col-start-2 lg:row-start-1 lg:block">
        <p className="text-sm text-white/55">In this page</p>
        {renderLinks()}
      </aside>
    </>
  );
}
