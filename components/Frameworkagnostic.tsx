"use client";

import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import type { SVGProps } from "react";


const FrameworkAgnostic = () => {
  return (
    <div
      className={cn(
        "relative",
        "flex flex-col justify-center items-center",
        "h-80 w-80 space-y-4",
      )}
    >
      <FrameworkCard />
    </div>
  );
};

export default FrameworkAgnostic;

const FrameworkCard = () => {
  const [reactTransform, setReactTransform] = useState("none");

  useEffect(() => {
    const cycleAnimations = async () => {
      const upStyle = "translateY(-3.71px) rotateX(10.71deg) translateZ(20px)";
      const downStyle = "none";

      const transitionDuration = 1000;

      const durationOfUpState = 2500;
      while (true) {
        setReactTransform(upStyle);
        await new Promise((resolve) => setTimeout(resolve, durationOfUpState));
        setReactTransform(downStyle);
        await new Promise((resolve) =>
          setTimeout(resolve, transitionDuration),
        );
      }
    };

    cycleAnimations();
  }, []);

  const cardClasses =
    "flex aspect-square items-center justify-center rounded-md border border-neutral-800 bg-linear-to-b from-neutral-800 to-neutral-900 p-4 " +
    "[@media(min-width:320px)]:h-20 [@media(min-width:500px)]:h-36 " +
    "transition-transform duration-1000 ease-out will-change-transform";

  return (
    <>
      <div
        className={cn(
          "relative",
          "flex flex-col items-center justify-center gap-1",
          "h-58 w-full",
        )}
      >
        <div className="absolute flex h-full w-full items-center justify-center">
          <div className="h-full w-60">
            <svg
              className="h-full w-full"
              width="100%"
              height="100%"
              viewBox="0 0 100 100"
              fill="none"
            >
              <g stroke="#737373" strokeWidth="0.1">
                <path d="M 1 0 v 5 q 0 5 5 5 h 39 q 5 0 5 5 v 71 q 0 5 5 5 h 39 q 5 0 5 5 v 5" />
              </g>
              <g mask="url(#framework-mask)">
                <circle
                  className="frameworkline framework-line"
                  cx="0"
                  cy="0"
                  r="12"
                  fill="url(#framework-blue-grad)"
                />
              </g>
              <defs>
                <mask id="framework-mask">
                  <path
                    d="M 1 0 v 5 q 0 5 5 5 h 39 q 5 0 5 5 v 71 q 0 5 5 5 h 39 q 5 0 5 5 v 5"
                    strokeWidth="0.3"
                    stroke="white"
                  />
                </mask>
                <radialGradient id="framework-blue-grad" fx="1">
                  <stop offset="0%" stopColor={"#3b82f6"} />
                  <stop offset="100%" stopColor="transparent" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
        <div
          className={cn(
            "flex items-center justify-center gap-4",
            "perspective-[1000px] transform-3d",
          )}
        >
          <div className={cardClasses} style={{ transform: reactTransform }}>
            <BotIcon className="size-6 text-neutral-100 [@media(min-width:500px)]:size-9" />
          </div>
        </div>

      </div>
      <style>{`
.frameworkline {
  offset-anchor: 10px 0px;
  animation: frameworkline-animation-path;
  animation-iteration-count: infinite;
  animation-timing-function: cubic-bezier(0.9, 0.8, 0.8, 0.9);
  animation-duration: 3.5s;
}

.framework-line {
  offset-path: path(
    "M 1 0 v 5 q 0 5 5 5 h 39 q 5 0 5 5 v 71 q 0 5 5 5 h 39 q 5 0 5 5 v 20"
  );
}

@keyframes frameworkline-animation-path {
  0% {
    offset-distance: 0%;
  }
  85% {
    offset-distance: 100%;
  }
  100% {
    offset-distance: 100%;
  }
}
      `}</style>
    </>
  );
};

const BotIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bot preview-icon"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
);

