"use client";

import * as React from "react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Highlight Grid
 *
 * A grid of labelled cells with a single coloured highlight that glides to sit
 * behind whichever cell the cursor is over — morphing its position, size and
 * colour with a smooth transition. Each cell carries its own accent colour, and
 * rows can hold any number of cells.
 *
 * The highlight's corner radii are computed per cell: a corner is rounded only
 * when BOTH edges that form it sit on the outer boundary of the grid (e.g. the
 * top-left corner is only rounded for a cell that is in the first row AND the
 * first column of its row). Any corner touching a neighbouring cell stays
 * square, so the highlight always matches the grid's own rounded-2xl outline.
 *
 * Ported 1:1 from the vanilla "CodeGrid Direction-Aware Hover" experiment into
 * a single, self-contained, prop-driven React component. No animation library —
 * the highlight is a CSS transition driven by pointer events.
 */

export interface HighlightItem {
  label: string;
  /** Accent colour for this cell. Falls back to the cycled `colors` palette. */
  color?: string;
}

export interface HighlightGridProps {
  /** Rows of cells. Each row can hold a different number of cells. */
  rows?: HighlightItem[][];
  /** Palette cycled for cells without an explicit `color`. */
  colors?: string[];
  /** Highlight transition duration in ms. Defaults to 250. */
  transitionDuration?: number;
  /** Park the highlight on the first cell on mount. Defaults to true. */
  highlightFirst?: boolean;
  /** Extra classes for the root element. */
  className?: string;
  /** Corner radius applied to outer corners, matching the grid's own rounding. Defaults to "1rem" (rounded-2xl). */
  cornerRadius?: string;
}

interface CellCorners {
  tl: boolean;
  tr: boolean;
  bl: boolean;
  br: boolean;
}

interface GridCell {
  label: string;
  color: string;
  gi: number;
  corners: CellCorners;
}

const DEFAULT_COLORS = [
  "#ff7d00",
  "#663399",
  "#efd81d",
  "#149eca",
  "#000000",
  "#36b7f0",
  "#0ae448",
  "#22AAA1",
];

const DEFAULT_ROWS: HighlightItem[][] = [
  [{ label: "html" }, { label: "css" }, { label: "javascript" }],
  [{ label: "gsap" }, { label: "scrolltrigger" }, { label: "react" }, { label: "next.js" }, { label: "three.js" }],
];

export function HighlightGrid({
  rows = DEFAULT_ROWS,
  colors = DEFAULT_COLORS,
  transitionDuration = 250,
  highlightFirst = true,
  className,
  cornerRadius = "1rem",
}: HighlightGridProps) {
  const gridRef = useRef<HTMLDivElement>(null);
  const highlightRef = useRef<HTMLDivElement>(null);
  const cellRefs = useRef<Map<number, HTMLElement>>(new Map());
  const activeRef = useRef<{ gi: number; color: string; corners: CellCorners } | null>(null);
  const [active, setActive] = useState<number | null>(highlightFirst ? 0 : null);

  // Flatten rows into cells with a running global index, resolved colour, and
  // which of its 4 corners sit on the outer boundary of the whole grid.
  const gridRows = useMemo<GridCell[][]>(() => {
    let gi = 0;
    const totalRows = rows.length;
    return rows.map((row, r) => {
      const isFirstRow = r === 0;
      const isLastRow = r === totalRows - 1;
      const totalCols = row.length;
      return row.map((item, c) => {
        const idx = gi++;
        const isFirstCol = c === 0;
        const isLastCol = c === totalCols - 1;
        return {
          label: item.label,
          color: item.color ?? colors[idx % colors.length],
          gi: idx,
          corners: {
            tl: isFirstRow && isFirstCol,
            tr: isFirstRow && isLastCol,
            bl: isLastRow && isFirstCol,
            br: isLastRow && isLastCol,
          },
        };
      });
    });
  }, [rows, colors]);

  const moveTo = useCallback(
    (gi: number, color: string, corners: CellCorners) => {
      // The highlight lives inside the grid, so offsets are relative to the grid.
      const grid = gridRef.current;
      const highlight = highlightRef.current;
      const el = cellRefs.current.get(gi);
      if (!grid || !highlight || !el) return;

      const rect = el.getBoundingClientRect();
      const crect = grid.getBoundingClientRect();
      highlight.style.transform = `translate(${rect.left - crect.left}px, ${rect.top - crect.top}px)`;
      highlight.style.width = `${rect.width}px`;
      highlight.style.height = `${rect.height}px`;
      highlight.style.backgroundColor = color;
      highlight.style.borderTopLeftRadius = corners.tl ? cornerRadius : "0px";
      highlight.style.borderTopRightRadius = corners.tr ? cornerRadius : "0px";
      highlight.style.borderBottomLeftRadius = corners.bl ? cornerRadius : "0px";
      highlight.style.borderBottomRightRadius = corners.br ? cornerRadius : "0px";
      activeRef.current = { gi, color, corners };
    },
    [cornerRadius],
  );

  // Park on the first cell initially, and keep the highlight aligned on resize.
  useEffect(() => {
    if (highlightFirst && gridRows[0]?.[0]) {
      const first = gridRows[0][0];
      const h = highlightRef.current;
      if (h) {
        // Skip the entry slide on the very first placement by momentarily
        // zeroing the duration — without touching the other transition
        // longhands, so every later move still animates.
        h.style.transitionDuration = "0s";
        moveTo(first.gi, first.color, first.corners);
        requestAnimationFrame(() => {
          if (h) h.style.transitionDuration = `${transitionDuration}ms`;
        });
      }
    }

    const onResize = () => {
      if (activeRef.current) {
        moveTo(activeRef.current.gi, activeRef.current.color, activeRef.current.corners);
      }
    };
    const grid = gridRef.current;
    const ro = grid ? new ResizeObserver(onResize) : null;
    if (grid && ro) ro.observe(grid);
    window.addEventListener("resize", onResize);
    return () => {
      ro?.disconnect();
      window.removeEventListener("resize", onResize);
    };
  }, [gridRows, highlightFirst, moveTo, transitionDuration]);

  return (
    <div
      className={cn(
        "relative flex flex-col h-full w-full items-center justify-center overflow-hidden",
        className,
      )}
    >
      <p className="text-2xl font-mono text-white -mt-8 mb-8">With all technologies</p>
      <div
        ref={gridRef}
        className="relative mx-auto flex h-[60%] w-[90%] flex-col border border-black/15 dark:border-white/20 rounded-2xl"
      >
        {/* Sliding highlight — solid accent (which fades between cells) with a
            fixed radiant gradient sheen layered over it. Corner radii are set
            per-cell in moveTo so only true outer corners round. */}
        <div
          ref={highlightRef}
          aria-hidden
          className="pointer-events-none absolute left-0 top-0 z-0"
          style={{
            backgroundImage:
              "radial-gradient(120% 120% at 50% 0%, rgba(255,255,255,0.28), rgba(255,255,255,0) 52%), linear-gradient(180deg, rgba(255,255,255,0) 55%, rgba(0,0,0,0.22))",
            transitionProperty: "transform, width, height, background-color, border-radius",
            transitionDuration: `${transitionDuration}ms`,
            transitionTimingFunction: "ease",
          }}
        />

        {gridRows.map((row, r) => (
          <div
            key={r}
            className={cn(
              "flex flex-1",
              r < gridRows.length - 1 && "border-b border-black/15 dark:border-white/20",
            )}
          >
            {row.map((cell, c) => {
              const isActive = active === cell.gi;
              return (
                <div
                  key={cell.gi}
                  ref={(el) => {
                    if (el) cellRefs.current.set(cell.gi, el);
                    else cellRefs.current.delete(cell.gi);
                  }}
                  onMouseEnter={() => {
                    setActive(cell.gi);
                    moveTo(cell.gi, cell.color, cell.corners);
                  }}
                  className={cn(
                    "flex h-full flex-1 items-center justify-center",
                    c < row.length - 1 && "border-r border-black/15 dark:border-white/20",
                  )}
                >
                  <p
                    className={cn(
                      "relative z-2 font-mono text-[13px] font-medium uppercase transition-colors duration-200",
                      isActive ? "text-white" : "text-neutral-600 dark:text-white/70",
                    )}
                  >
                    ( {cell.label} )
                  </p>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

export default HighlightGrid;