import Link from "next/link";
import Image from "next/image";

import LatticeLoader from "@/components/motion/lattice-loader";
import { PageSectionsNav, type PageSection } from '@/components/PageSectionsNav';
import { ContentCard, type ContentType } from "@/components/ContentCard";

import scrollWord from '../../../components/assets/img/scroll-world.png';

const skills: ContentType[] = [
    {
        id: 'impeccable',
        title: 'Impeccable',
        description: 'Design guidance for AI coding agents. 1 skill, 24 commands, live browser iteration, and 61 deterministic detector rules for AI-generated frontend design.',
        imageUrl: 'https://impeccable.style/og-image-v6.png',
        linkUrl: 'https://github.com/pbakaus/impeccable'
    },
    {
        id: 'taste',
        title: 'Taste Skill',
        description: 'Portable Agent Skills that upgrade AI-built interfaces: stronger layout, typography, motion, and spacing instead of boilerplate-looking UIs.',
        imageUrl: 'https://github.com/Leonxlnx/taste-skill/raw/main/assets/readme-banner.webp',
        linkUrl: 'https://github.com/Leonxlnx/taste-skill',
        classNameImg: 'h-full'
    },
    {
        id: 'ui-ux-pro-max',
        title: 'UI-UX PRO MAX',
        description: 'An AI skill that provides design intelligence for building professional UI/UX across multiple platforms and frameworks.',
        imageUrl: 'https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/raw/main/screenshots/website.png',
        linkUrl: 'https://github.com/nextlevelbuilder/ui-ux-pro-max-skill'
    },
    {
        id: 'emil-skill',
        title: 'Emil Kowalski Design Engineering',
        description: 'For designers and engineers to help them build better user interfaces. Knowing whether you made a right choice when it comes to animations, or design in general, is hard. These skills aim to help you get to those right decisions faster.',
        imageUrl: 'https://emilkowal.ski/_next/image?url=%2Fcourse-post%2Fold-ui-dark.jpg&w=1920&q=75',
        linkUrl: 'https://github.com/emilkowalski/skills',
        classNameImg: 'h-full'
    },
    {
        id: 'frontend-design',
        title: 'Anthropic Frontend Design',
        description: "Guidance for distinctive, intentional visual design when building new UI or reshaping an existing one. Helps with aesthetic direction, typography, and making choices that don't read as templated defaults.",
        imageUrl: 'https://preview.redd.it/front-end-design-skill-from-anthropic-v0-1anfi1z1c34g1.jpg?width=2602&format=pjpg&auto=webp&s=c4e57afab5c80d40a34b7b9ce1abbc64639db8e1',
        linkUrl: 'https://github.com/anthropics/skills/tree/main/skills/frontend-design'
    }
];

const sections: PageSection[] = [
    { id: 'overview', label: 'Overview' },
    { id: 'impeccable', label: 'Impeccable' },
    { id: 'taste', label: 'Taste' },
    { id: 'ui-ux-pro-max', label: 'UI-UX PRO MAX' },
    { id: 'emil-skill', label: 'Emil Kowalski' },
    { id: 'frontend-design', label: 'Frontend Design' },
    { id: 'motion-design', label: 'Motion Design' },
    { id: 'scroll-word', label: 'Scroll Word' },
    { id: 'gsap', label: 'GSAP' },
];


export default function Home(){
    return (
        <main className="min-h-screen overflow-x-clip bg-[#090909] font-sans text-[#f2f0eb]">
            <div className="mx-auto grid min-h-screen w-full max-w-375 gap-5 px-3 py-3 sm:px-5 lg:grid-cols-[minmax(0,1fr)_12rem] lg:px-7">
                <section className="min-w-0 flex-1 rounded-xl border border-white/10 bg-[#111111] px-5 py-7 sm:px-8 lg:px-12 lg:py-10">
                    <div id="overview" className="max-w-4xl">
                        <h1 className="mt-5 text-2xl font-semibold tracking-tight sm:text-3xl">Skills & MCPs</h1>
                        <p className="mt-4 max-w-4xl text-lg leading-8 text-white/60">
                            The skills and MCPs give to the agents abilities to perform specific tasks and interact with the environment. Skills are pre-defined capabilities that agents can use to accomplish their goals, while MCPs define how agents communicate and share information with each other. Together, they can create powerful and creative solutions
                        </p>
                    </div>
                    <LatticeLoader className="mt-15 w-full items-center justify-center"
                        status="working"
                        label="Thinking"
                        doneLabel="Done in"
                        errorLabel="Failed after"
                        pattern="orbit"
                        grid={3}
                        shape="round"
                        doneColor="#22c55e"
                        errorColor="#ef4444"
                        cellSize={6}
                        gap={2}
                        fontSize={14}
                        step={90}
                        idleOpacity={0.15}
                        glow={false}
                        glowColor=""
                        showTimer
                        color="#f5f5f5"
                    />

                    <div id="skills" className="pt-10">
                        <h3 className="text-xl text-white/50 mt-10 -mb-10">Core and essential skills for web design</h3>
                        {skills.map((skill) => (
                            <ContentCard key={skill.id} {...skill} />
                        ))}
                        <h3 className="text-xl text-white/50 mt-20">Specific skills for animations and scroll effects</h3>

                        <div id="motion-design" className="mt-10 scroll-mt-6 grid max-w-5xl h-auto md:max-h-75 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 md:grid-cols-2">
                            <div className="bg-[#171717] p-5">
                                <div className="flex items-center justify-between gap-4">
                                    <p className="mt-2 text-xl font-semibold uppercase tracking-[0.12em]">Motion Design</p>
                                </div>
                                <p className='mt-10 text-md text-white/80'>Universal motion design principles for AI agents — timing, easing, choreography, and Disney animation principles adapted for UI</p>
                                
                            </div>
                            <Link href="https://github.com/lottiefiles/motion-design-skill" target="_blank" rel="noopener noreferrer" className="bg-white">
                                <img alt="Motion Design Skill" src="https://camo.githubusercontent.com/e2f9ad09619e9fb3f396ef35caa1b1dd554beaac796dc4b999b1026fdbd8420b/68747470733a2f2f6c6f747469652e686f73742f63646235653734392d663339332d343333332d616432332d3832303066313231653864332f5a3473495339784b44432e7376673f763d31"
                                    className="w-full object-cover h-full" />
                            </Link>
                        </div>
                        <div id="scroll-word" className="mt-10 scroll-mt-6 grid max-w-5xl h-auto md:max-h-70 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 md:grid-cols-2">
                            <div className="bg-[#171717] p-5">
                                <div className="flex items-center justify-between gap-4">
                                    <p className="mt-2 text-xl font-semibold uppercase tracking-[0.12em]">Scroll Word</p>
                                </div>
                                <p className='mt-10 text-md text-white/80'>An agent skill that builds an immersive, scroll-scrubbed "fly through the world" landing page for any industry or brand</p>
                                
                            </div>
                            <Link href="https://github.com/oso95/scroll-world" target="_blank" rel="noopener noreferrer">
                                <Image alt="Scroll Word" width={500} height={500} src={scrollWord}
                                    className="w-full object-cover" />
                            </Link>
                        </div>
                        <div id="gsap" className="mt-10 scroll-mt-6 grid max-w-5xl h-auto md:max-h-75 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 md:grid-cols-2">
                            <div className="bg-[#171717] p-5">
                                <div className="flex items-center justify-between gap-4">
                                    <p className="mt-2 text-xl font-semibold uppercase tracking-[0.12em]">GSAP</p>
                                </div>
                                <p className='mt-10 text-md text-white/80'>Teach agents correct GSAP usage: core API, timelines, ScrollTrigger, plugins and performance.</p>
                                
                            </div>
                            <Link href="https://github.com/greensock/gsap-skills" target="_blank" rel="noopener noreferrer">
                                <img alt="GSAP Skill" src="https://camo.githubusercontent.com/4823f45b73bf81302a34f358cd8870fda810f10e829f9d5fe1b0c46ff16774a7/68747470733a2f2f677361702e636f6d2f475341502d73686172652d696d6167652e706e67"
                                    className="w-full object-cover h-full" />
                            </Link>
                        </div>
                    </div>
                </section>
                <PageSectionsNav sections={sections} />
            </div>
            
        </main>
    )
}