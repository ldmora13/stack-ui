"use client"

import { useEffect, useRef, useState } from "react"
import { RefreshCw, Sparkles } from "lucide-react"
import GridReveal from "@/components/ui/grid-reveal"

const palettes = [
  ["#fc4c01", "#ffb000", "#141414"],
  ["#f25f5c", "#247ba0", "#111827"],
  ["#70c1b3", "#ffe066", "#17202a"],
]

function createImage(seed: number) {
  const [primary, secondary, background] = palettes[seed % palettes.length]
  const angle = 18 + seed * 31
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="${background}"/>
          <stop offset="1" stop-color="#080808"/>
        </linearGradient>
        <radialGradient id="glow" cx="50%" cy="45%" r="65%">
          <stop offset="0" stop-color="${primary}" stop-opacity=".9"/>
          <stop offset="1" stop-color="${primary}" stop-opacity="0"/>
        </radialGradient>
        <filter id="blur"><feGaussianBlur stdDeviation="42"/></filter>
      </defs>
      <rect width="1200" height="800" fill="url(#bg)"/>
      <circle cx="270" cy="230" r="260" fill="${secondary}" opacity=".32" filter="url(#blur)"/>
      <circle cx="920" cy="570" r="300" fill="url(#glow)" filter="url(#blur)"/>
      <g transform="rotate(${angle} 600 400)" fill="none" stroke="${primary}" stroke-width="3" opacity=".75">
        <rect x="215" y="145" width="770" height="510" rx="255"/>
        <rect x="300" y="230" width="600" height="340" rx="170" stroke="${secondary}"/>
        <path d="M170 400h860M600 110v580" opacity=".35"/>
      </g>
      <g fill="#fff" opacity=".78">
        <circle cx="250" cy="155" r="5"/><circle cx="925" cy="190" r="4"/>
        <circle cx="1040" cy="610" r="6"/><circle cx="390" cy="670" r="3"/>
      </g>
      <text x="72" y="715" fill="#fff" font-family="sans-serif" font-size="20" letter-spacing="5" opacity=".8">AGENT / ${String(seed + 1).padStart(2, "0")}</text>
    </svg>`

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`
}

export function ImageReveal() {
  const [src, setSrc] = useState<string | null>(null)
  const [isGenerating, setIsGenerating] = useState(false)
  const [hasError, setHasError] = useState(false)
  const seedRef = useRef(0)

  async function generate() {
    setIsGenerating(true)
    setHasError(false)
    setSrc(null)

    await new Promise((resolve) => window.setTimeout(resolve, 180))
    seedRef.current += 1
    setSrc(createImage(seedRef.current))
    setIsGenerating(false)
  }

  useEffect(() => {
    const timer = window.setTimeout(() => void generate(), 0)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <div className="w-full max-w-2xl flex flex-row gap-x-10">
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#171717] p-2">
        <GridReveal
          src={src}
          alt="Abstract generated image for the Agents guide"
          caption={hasError ? "Unable to load image" : "Creating image"}
          aspect={1.5}
          onError={() => {
            setHasError(true)
            setIsGenerating(false)
          }}
        />
      </div>

      <div className="mt-4 flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => void generate()}
          disabled={isGenerating}
          className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[#fc4c01]/60 px-4 py-2 text-sm font-medium text-[#ff9a6b] transition-colors hover:bg-[#fc4c01]/10 disabled:cursor-wait disabled:opacity-50"
        >
          {isGenerating ? (
            <RefreshCw className="size-4 animate-spin" aria-hidden="true" />
          ) : (
            <Sparkles className="size-4" aria-hidden="true" />
          )}
          {isGenerating ? "Creating" : "Generate"}
        </button>
      </div>
    </div>
  )
}
