import Header from "./components/Header";
import Grainient from "./components/Grainient";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center bg-zinc-50 font-sans dark:bg-black">
      <div className="w-full relative overflow-hidden">
          <Header />
          <Grainient
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
      </div>
    </div>
  );
}
