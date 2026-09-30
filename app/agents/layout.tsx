import type { Metadata } from "next";

import { FilesTree } from "@/components/FilesTree";
import { HookSidebar } from "@/components/motion/hook-sidebar";

export const metadata: Metadata = {
  title: "UI / Web Design AI | Stack UI",
  description:
    "Tools and resources for building AI-powered applications with Stack UI. Learn about agent architecture, best practices, and how to leverage our components for your AI projects.",
};

export default function AgentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen gap-5 px-3 py-3 sm:px-5 lg:px-7">
      <aside className="sticky top-3 h-fit w-56 shrink-0 rounded-xl border border-white/10 bg-[#0f0f0f] p-3 sm:w-64">
        <HookSidebar
          items={[
            { label: "Overview", href: "/agents" },
            { label: "Agents", href: "/agents/agents" },
            { label: "Skills & MCPs", href: "/agents/skills" },
            { label: "Design Systems", href: "/agents/designs" },
            { label: "Prompts", href: "/agents/prompts" },
          ]}
          label="Agents"
          dashed
          color="#FC4C01"
        />
        <FilesTree />
      </aside>
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}
