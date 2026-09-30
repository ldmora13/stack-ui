import { ImageReveal } from "@/components/Image-reveal";

export default function Home(){

    return (
        <main className="min-h-screen overflow-x-hidden bg-[#090909] font-sans text-[#f2f0eb]">
            <div className="mx-auto flex min-h-screen w-full max-w-[1500px] gap-5 px-3 py-3 sm:px-5 lg:px-7">
                <section className="min-w-0 flex-1 rounded-xl border border-white/10 bg-[#111111] px-5 py-7 sm:px-8 lg:px-12 lg:py-10">
                    <div className="max-w-4xl">
                        <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">Agents</h1>
                        <p className="mt-4 max-w-2xl text-lg leading-8 text-white/60">
                            A curated starting point for building with AI. Discover websites, tools, models, skills, MCPs, and other resources for AI-powered development and vibecoding.
                        </p>
                    </div>

                    <div className="mt-12 grid max-w-5xl gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 md:grid-cols-3">
                        <div className="bg-[#171717] p-5">
                            <p className="text-2xl font-semibold text-[#fc4c01]">01</p>
                            <h2 className="mt-8 text-sm font-semibold uppercase tracking-[0.12em]">Discover</h2>
                            <p className="mt-2 text-sm leading-6 text-white/50">Discover websites, tools, and resources to explore new ways of creating with AI.</p>
                        </div>
                        <div className="bg-[#171717] p-5">
                            <p className="text-2xl font-semibold text-[#fc4c01]">02</p>
                            <h2 className="mt-8 text-sm font-semibold uppercase tracking-[0.12em]">Extend</h2>
                            <p className="mt-2 text-sm leading-6 text-white/50">Find skills, MCPs, and resources to expand the capabilities of your agents and tools.</p>
                        </div>
                        <div className="bg-[#171717] p-5">
                            <p className="text-2xl font-semibold text-[#fc4c01]">03</p>
                            <h2 className="mt-8 text-sm font-semibold uppercase tracking-[0.12em]">Build</h2>
                            <p className="mt-2 text-sm leading-6 text-white/50">Explore resources to develop, experiment with, and build applications using AI and vibecoding.</p>
                        </div>
                    </div>

                    <div className="mt-14 grid max-w-5xl gap-10 lg:grid-cols-[1.2fr_0.8fr]">
                         <div className="w-full">
                            <ImageReveal />
                         </div>

                        <aside className="border-t border-white/10 pt-5 lg:border-l lg:border-t-0 lg:pl-7">
                            <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/35">In this collection</p>
                            <ul className="mt-4 space-y-3 text-sm text-white/60">
                                <li className="flex justify-between gap-4"><span>Agents</span><span className="text-white/25">02</span></li>
                                <li className="flex justify-between gap-4"><span>Skills and MCPs</span><span className="text-white/25">03</span></li>
                                <li className="flex justify-between gap-4"><span>Design Systems </span><span className="text-white/25">04</span></li>
                                <li className="flex justify-between gap-4"><span>Prompts</span><span className="text-white/25">05</span></li>
                            </ul>
                        </aside>
                    </div>
                </section>
            </div>
        </main>
    )
}