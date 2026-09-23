import { HighlightGrid } from "./ui/HighlightGrid";

export function Grid() {
  return (
    <HighlightGrid className="h-90 w-150 border border-white/10 rounded-2xl p-8"
      rows={[
            [{ label: "html" }, { label: "css" }, { label: "javascript" }],
            [{ label: "react" }, { label: "next.js" }, { label: "tailwind" }],
            [{ label: "gsap" }, { label: "framer-motion" }, { label: "three.js" }],
      ]}
    />
  )
}