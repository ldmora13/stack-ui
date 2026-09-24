import Link from "next/link";

import Header from "@/components/Header";
import Grainient from "@/components/Grainient";

import { Sparkles, ArrowRight } from "lucide-react";

import { RadialNavDemo } from "@/components/Radial-nav";
import { Grid } from "@/components/Grid";
import { LoopingWordsDemo } from "@/components/LoopingWords";
import { MagneticButton } from "@/components/Magentic-button";

export default function Home() {

  return (
    <div className="flex min-h-screen flex-col items-center overflow-x-hidden bg-zinc-50 font-sans dark:bg-black">
      <Header />
      <main className="relative flex min-h-screen w-full flex-col items-center overflow-hidden">
        <Grainient className="absolute! inset-0 z-0 h-auto!"
            color1="#550552"
            color2="#302850"
            color3="#3a3341"
            timeSpeed={0.25}
            colorBalance={0}
            warpStrength={1}
            warpFrequency={5}
            warpSpeed={2}
            warpAmplitude={50}
            blendAngle={0}
            blendSoftness={0.05}
            rotationAmount={500}
            noiseScale={2}
            grainAmount={0.1}
            grainScale={2}
            grainAnimated={false}
            contrast={1.5}
            gamma={1}
            saturation={1}
            centerX={0}
            centerY={0}
            zoom={0.9}
          />
        <div className="relative z-10 flex w-full max-w-6xl flex-col items-center px-4 pb-12 pt-28 sm:px-6 sm:pt-32">
          <div className="flex w-full flex-col items-center">
            <div className="max-w-2xl text-center">
              <h1 className="text-3xl font-bold text-white sm:text-4xl">Welcome to Stack UI</h1>
              <p className="mt-3 text-base leading-6 text-white/75 sm:text-lg">A curated collection of UI components and design resources from across the web. Browse, explore, and get inspired.</p>
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <Link href="/categories">
                <MagneticButton variant="dark" size="md">
                  <Sparkles className="h-5 w-5" />
                  Get Started
                </MagneticButton>
              </Link>
              <Link href="/components">
                <MagneticButton variant="outline" size="md">
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                </MagneticButton>
              </Link>
            </div>
          </div>
          <div className="mt-8 grid w-full grid-cols-1 items-stretch gap-4 xl:grid-cols-[minmax(0,280px)_minmax(0,1fr)_minmax(0,280px)]">
            <div className="flex min-h-90 w-full flex-col items-center justify-center gap-y-10 rounded-2xl border border-white/10 p-6 sm:p-8">
              <h2 className="text-center font-mono text-xl text-white sm:text-2xl">The perfect routing</h2>
              <RadialNavDemo />
            </div>
            <Grid/>
            <div className="flex min-h-90 w-full flex-col items-center justify-center gap-y-10 rounded-2xl border border-white/10 p-6 sm:p-8">
              <div className="flex flex-col items-center justify-center gap-y-2">
                <h2 className="font-mono text-xl text-white sm:text-2xl">For</h2>
                <p className="font-mono text-xl text-white sm:text-2xl">Every</p>
              </div>
              <LoopingWordsDemo />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
