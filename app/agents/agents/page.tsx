import Link from 'next/link';

import { PageSectionsNav, type PageSection } from '@/components/PageSectionsNav';

const sections: PageSection[] = [
    { id: 'overview', label: 'Overview' },
    { id: 'opendesign', label: 'OpenDesign' },
    { id: 'stitch', label: 'Stitch' },
    { id: 'swishy', label: 'Swishy' },
    { id: 'replit', label: 'Replit' },
    { id: 'relume', label: 'Relume' },
    { id: 'framer', label: 'Framer' },
];

export default function Home() {
    return (
        <main className="min-h-screen overflow-x-clip bg-[#090909] font-sans text-[#f2f0eb]">
            <div className="mx-auto grid min-h-screen w-full max-w-375 gap-5 px-3 py-3 sm:px-5 lg:grid-cols-[minmax(0,1fr)_12rem] lg:px-7">
                <section className="min-w-0 flex-1 rounded-xl border border-white/10 bg-[#111111] px-5 py-7 sm:px-8 lg:px-12 lg:py-10">
                     <div id="overview" className="max-w-4xl">
                        <h1 className="mt-5 text-2xl font-semibold tracking-tight sm:text-3xl">UI / Web Design AI</h1>
                        <p className="mt-4 max-w-4xl text-lg leading-8 text-white/60">
                            The coding agents listed here are focused on create UI and web design experiences. They can assist developers in generating code, designing interfaces, and enhancing the overall user experience of applications.
                        </p>
                    </div>
                    
                    <div id="opendesign" className="mt-12 scroll-mt-6 grid max-w-5xl h-auto md:max-h-75 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 md:grid-cols-2">
                        <div className="bg-[#171717] p-5">
                            <div className="flex items-center justify-between gap-4">
                                <p className="mt-2 text-xl font-semibold uppercase tracking-[0.12em]">OpenDesign</p>
                                <div className="bg-[#171717] rounded-lg px-3 py-1 text-sm font-semibold text-[#01fc4c] border border-white/10">
                                    <p>FREE</p>
                                </div>
                            </div>
                            <p className='mt-10 text-md text-white/80'>OpenDesign is a open-source AI design workspace. It transforms a local coding agent into a design engine featuring composable skills and portable DESIGN.md systems.</p>
                            <p className='mt-2 text-sm text-white/50'>OpenDesign is the open-source and local alternative to Claude Design.</p>
                        </div>
                        <Link href="https://open-design.ai/" target="_blank" rel="noopener noreferrer">
                            <img alt="OpenDesign" src="https://open-design.ai/hero-product-1280.webp?v=3"
                                    className="w-full object-cover" />
                        </Link>
                    </div>

                    <div id="stitch" className="mt-20 scroll-mt-6 grid max-w-5xl h-auto md:max-h-75 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 md:grid-cols-2">
                        <div className="bg-[#171717] p-5">
                            <div className="flex items-center justify-between gap-4">
                                <p className="mt-2 text-xl font-semibold uppercase tracking-[0.12em]">Stitch <span className='text-sm text-white/50'>By Google</span></p>
                                <div className="bg-[#171717] rounded-lg px-3 py-1 text-sm font-semibold text-[#01fc4c] border border-white/10">
                                    <p>FREE</p>
                                </div>
                            </div>
                            <p className='mt-10 text-md text-white/80'>Stitch transforms your ideas into designs through AI-powered iteration. Whether you’re building web apps, mobile experiences, or prototypes, start here.</p>
                        </div>
                        <Link href="https://stitch.withgoogle.com/" target="_blank" rel="noopener noreferrer">
                            <img alt="Stitch" src="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Stitch_Keyword_Hero_Visual.width-2200.format-webp.webp"
                                    className="w-full object-cover" />
                        </Link>
                    </div>
                    <div id="swishy" className="mt-12 scroll-mt-6 grid max-w-5xl h-auto md:max-h-75 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 md:grid-cols-2">
                        <div className="bg-[#171717] p-5">
                            <div className="flex items-center justify-between gap-4">
                                <p className="mt-2 text-xl font-semibold uppercase tracking-[0.12em]">Swishy</p>
                                <div className="bg-[#171717] rounded-lg px-3 py-1 text-sm font-semibold text-[#01fc4c] border border-white/10">
                                    <p>FREE</p>
                                </div>
                            </div>
                            <p className='mt-10 text-md text-white/80'>Swishy is an AI-powered animation tool that helps you create short videos quickly and easily. It’s designed for people who want professional-looking animations without needing design or video-editing experience.</p>
                        </div>
                        <Link href="https://swishy.ai/" target="_blank" rel="noopener noreferrer">
                            <img alt="Swishy ai" src="https://swishy.gitbook.io/docs/~gitbook/image?url=https%3A%2F%2F1519617812-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FSfR9NohQoylP6cOmxu51%252Fuploads%252F76XeqguXDiYVSUMTWhg1%252FScreenshot%25202026-02-01%2520at%25204.24.22%25E2%2580%25AFPM.png%3Falt%3Dmedia%26token%3D02436fe7-9c65-4143-89ac-58f20d39de94&width=400&dpr=3&quality=100&sign=47f452c8b926f48db2e366b6ceafc9c1&sv=3" />
                        </Link>
                    </div>
                    <div id="replit" className="mt-12 scroll-mt-6 grid max-w-5xl h-auto md:max-h-75 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 md:grid-cols-2">
                        <div className="bg-[#171717] p-5">
                            <div className="flex items-center justify-between gap-4">
                                <p className="mt-2 text-xl font-semibold uppercase tracking-[0.12em]">Replit</p>
                                <div className="bg-[#171717] rounded-lg px-3 py-1 text-sm font-semibold text-[#01fc4c] border border-white/10">
                                    <p>FREE</p>
                                </div>
                            </div>
                            <p className='mt-10 text-md text-white/80'>Replit is a place to build and publish software—websites, apps, and the services behind them—with AI helping write and change the code. You can make the design, animations, and interactions there too.</p>
                        </div>
                        <Link href="https://replit.com/" target="_blank" rel="noopener noreferrer">
                            <img className="w-full h-75 object-cover" alt="Replit" src="https://mintcdn.com/replit/teDUL4A-lNO7dv1O/images/chat/start-new-conversation-home-sanitized-neutral.jpg?fit=max&auto=format&n=teDUL4A-lNO7dv1O&q=85&s=cf93f549696aff0eab748dd953aea0b6" />
                        </Link>
                    </div>
                    <div id="relume" className="mt-12 scroll-mt-6 grid max-w-5xl h-auto md:max-h-75 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 md:grid-cols-2">
                        <div className="bg-[#171717] p-5">
                            <div className="flex items-center justify-between gap-4">
                                <p className="mt-2 text-xl font-semibold uppercase tracking-[0.12em]">Relume</p>
                                <div className="bg-[#171717] rounded-lg px-3 py-1 text-sm font-semibold text-[#01fc4c] border border-white/10">
                                    <p>FREE</p>
                                </div>
                            </div>
                            <p className='mt-10 text-md text-white/80'>Relume is an AI-powered web design and development platform focused on marketing sites that accelerates the initial stages of planning, structuring, and writing a website based on a simple text description focused.</p>
                        </div>
                        <Link href="https://relume.ai/" target="_blank" rel="noopener noreferrer">
                            <img alt="Relume AI" src="https://miro.medium.com/v2/resize:fit:1100/format:webp/0*9lmYl6bRuIk_sDKH.png" />
                        </Link>
                    </div>
                    <div id="framer" className="mt-12 scroll-mt-6 grid max-w-5xl h-auto md:max-h-75 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 md:grid-cols-2">
                        <div className="bg-[#171717] p-5">
                            <div className="flex items-center justify-between gap-4">
                                <p className="mt-2 text-xl font-semibold uppercase tracking-[0.12em]">Framer</p>
                                <div className="bg-[#171717] rounded-lg px-3 py-1 text-sm font-semibold text-[#01fc4c] border border-white/10">
                                    <p>FREE</p>
                                </div>
                            </div>
                            <p className='mt-10 text-md text-white/80'>Framer AI is an AI-powered design engine and canvas agent natively integrated into the Framer website builder. It is designed for designers and teams who want to transition from text prompts or concept boundaries to fully editable, semantic web layers, interactive components, and operational CMS setups without writing manual code.</p>
                        </div>
                        <Link href="https://www.framer.com/" target="_blank" rel="noopener noreferrer">
                            <img alt="Framer" src="https://framerusercontent.com/images/7eUiPQ3PJJnvU7zXf1KCug50q6A.png?width=2400&height=1520" />
                        </Link>
                    </div>
                </section>
                <PageSectionsNav sections={sections} />
            </div>
        </main>
    )
}