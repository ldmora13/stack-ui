import { HighlightGrid } from "./ui/HighlightGrid";

export function Grid() {
  return (
    <HighlightGrid className="min-h-90 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 shadow-lg backdrop-blur-xs p-6 sm:p-8"
      rows={[
            [{ label: "html" }, { label: "css" }, { label: "js" }],
            [{ label: "react" }, { label: "next" }],
            [{ label: "tailwind" }],
            [{ label: "gsap" }, { label: "motion" }, { label: "three" }],
      ]}
    />
  )
}