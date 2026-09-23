import Header from "./components/Header";
import Grainient from "./components/Grainient";

import { RadialNavDemo } from "./components/Radial-nav";
import { Grid } from "./components/Grid";
import { TextMorph } from "./components/Textmorph";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center bg-zinc-50 font-sans dark:bg-black">
      <Header />
      <div className="w-full h-screen relative">
        <Grainient className="absolute inset-0 z-0"
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
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
          <div className="flex flex-col items-center w-full">
            <div className="text-center max-w-2xl">
              <h1 className="text-4xl font-bold text-white">Welcome to Stack UI</h1>
              <p className="text-lg text-white/75 mt-2">A curated collection of UI components and design resources from across the web. Browse, explore, and get inspired.</p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center w-full gap-x-4 mt-8">
            <div className="flex flex-col h-90 w-70 items-center justify-center gap-y-10 border border-white/10 rounded-2xl p-8">
              <h2 className="text-2xl font-mono text-white text-center">The perfect rounting</h2>
              <RadialNavDemo />
            </div>
            <Grid/>
            <div className="flex flex-col h-90 w-70 items-center justify-center gap-y-10 border border-white/10 rounded-2xl p-8">
            <div className="flex flex-col items-center justify-center gap-y-2 -mt-30">
              <h2 className="text-2xl font-mono text-white">For</h2>
              <p className="text-2xl font-mono text-white">Every</p>
            </div>
              
              <TextMorph
                words={["Developer", "Designer", "Vibe Coder"]}
                interval={2500}
                className="text-2xl font-mono text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
