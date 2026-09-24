"use client";

import { LoopingWords } from "./ui/looping-words";

export function LoopingWordsDemo() {
  const words = [
    "Developer",
    "Designer",
    "Vibe Coder"
  ];

  return (
    <div className="w-full flex items-center justify-center p-8">
      <LoopingWords words={words} />
    </div>
  );
}