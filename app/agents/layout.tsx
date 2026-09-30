import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Frontend Docs & Agent Architecture | Stack UI",
  description:
    "Documentación técnica de desarrollo web frontend con Inteligencia Artificial: Spec-Driven Development, Modelos LLM, Protocolo MCP, designs.md y flujos agénticos.",
};

export default function AgentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
