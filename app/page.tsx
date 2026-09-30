import Link from "next/link";

import Header from "@/components/Header";
import DotGrid from "@/components/ui/dotGrid";

import { Sparkles, ArrowRight } from "lucide-react";
  
import { RadialNavDemo } from "@/components/Radial-nav";
import { Grid } from "@/components/Grid";
import { LoopingWordsDemo } from "@/components/LoopingWords";
import { MagneticButton } from "@/components/Magentic-button";

export default function Home() {

  return (
    <main className="min-h-screen overflow-x-hidden bg-background font-sans text-foreground dark:bg-black">
      <Header />
      <section className="relative min-h-screen w-full">
        <div className="absolute inset-0 z-0 w-full h-full">
          <DotGrid 
            dotSize={5}
            gap={15}
            baseColor="#2F293A"
            activeColor="#5227FF"
            proximity={120}
            shockRadius={250}
            shockStrength={5}
            resistance={750}
            returnDuration={1.5}
          />
        </div>
        <div className="relative z-10 flex w-full max-w-7xl flex-col items-center mt-10 md:mt-0 px-6 pb-12 pt-15 sm:px-6 sm:pt-32 text-center mx-auto">
          <div className="flex flex-col items-center">
            <div className="max-w-2xl text-center">
              <h1 className="text-3xl font-bold text-white sm:text-4xl">Welcome to Stack UI</h1>
              <p className="mt-3 text-base leading-6 text-white/75 sm:text-lg">A curated collection of websites, tools, and resources for AI, design, and development. Explore, discover, and get inspired.</p>
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
            <div className="flex min-h-90 w-full flex-col items-center justify-center gap-y-10 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 shadow-lg backdrop-blur-xs p-6 sm:p-8">
              <h2 className="text-center font-mono text-xl text-white sm:text-2xl">The perfect route</h2>
              <RadialNavDemo />
            </div>
            <Grid/>
            <div className="flex min-h-90 w-full flex-col items-center justify-center gap-y-10 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 shadow-lg backdrop-blur-xs p-6 sm:p-8">
              <div className="flex flex-col items-center justify-center gap-y-2">
                <p className="font-mono text-xl text-white sm:text-2xl">For every</p>
                <p className="font-mono text-xl text-white sm:text-2xl">Builder</p>
              </div>
              <LoopingWordsDemo />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
