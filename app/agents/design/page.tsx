
import { PageSectionsNav, type PageSection } from '@/components/PageSectionsNav';
import { ContentCard, type ContentType } from "@/components/ContentCard";

const skills: ContentType[] = [
    {   id: 'duply', 
        title: 'Duply AI', 
        description: 'Duply turns a real design system into one DESIGN.md: tokens, type, spacing, components, so your AI agent builds in that exact visual language.', 
        imageUrl: 'https://pub-bd746bf629d442619245245462e32995.r2.dev/items/duply_image_1783482058675.webp', 
        linkUrl: 'https://duply.ai/' 
    },
    {
        id: 'awesome-design',
        title: 'Awesome Design MD',
        description: 'Copy a DESIGN.md into your project, tell your AI agent “build me a page that looks like this,” and generate high-quality UI that stays visually consistent with the design language.',
        imageUrl: 'https://camo.githubusercontent.com/90f7fd07c108c073994c99138b97a51aa7ca4a3abf17bfd59d5b9f065165a464/68747470733a2f2f63646e2e766f6c746167656e742e6465762f617765736f6d652d7265706f2f6c6f676f2e6a736f6e2e737667',
        linkUrl: 'https://getdesign.md/',
        classNameImg: 'h-full'
    },
    {
        id: 'design-md',
        title: 'Design MD',
        description: 'Extract a real design system from any production URL — colors, typography, spacing, breakpoints, motion, interaction states — and stream it as a portable DESIGN.md your coding agent can actually read.',
        imageUrl: 'https://ph-files.imgix.net/e55725c8-303e-4b55-9a3c-3c569615d5ca.jpeg?auto=compress,format&codec=mozjpeg&cs=strip&dpr=2&fit=max&frame=1&h=640&w=683',
        linkUrl: 'https://designmd.cc/',
    },
    {
        id: 'styles-refero-design',
        title: 'Refero Styles',
        description: 'Browse 2,000+ AI-readable design systems from leading product websites. Open any style for colors, typography, spacing, components, and a DESIGN.md you can use in your agent.',
        imageUrl: 'https://media.daily.dev/image/upload/f_auto,q_auto/v1/posts/b9219419ebfce90731ea36e63d6c4406?_a=AQAEuop',
        linkUrl: 'https://styles.refero.design/',
    },
    {
        id: 'open-design',
        title: 'Open Design',
        description: 'Browse real-world design system examples — brand-grade palette, typography, motion and voice your coding agent can snap any project to. Every system is open-source and runs with Claude, Codex, Cursor and more.',
        imageUrl: 'https://github.com/nexu-io/open-design/raw/main/docs/assets/readme-hero-design-agent.webp',
        linkUrl: 'https://open-design.ai/plugins/systems/',
    },
    {
        id: 'opendesign',
        title: 'OpenDesign',
        description: 'OpenDesign is an open library of web aesthetics. DESIGN.md compresses a design system into one file. Feed one URL to an AI and it generates a same-spirit page.',
        imageUrl: 'https://github.com/qiuyiwu1989-star/opendesign/raw/main/og-cover.png',
        linkUrl: 'https://opendesign.cc/',
    },
];

const sections: PageSection[] = [
    { id: 'overview', label: 'Overview' },
    { id: 'duply', label: 'Duply' },
    { id: 'awesome-design', label: 'Awesome Design' },
    { id: 'design-md', label: 'Design MD' },
    { id: 'styles-refero-design', label: 'Refero Styles' },
    { id: 'open-design', label: 'Open Design' },
    { id: 'opendesign', label: 'OpenDesign' },

];


export default function Home(){
    return (
        <main className="min-h-screen overflow-x-clip bg-[#090909] font-sans text-[#f2f0eb]">
            <div className="mx-auto grid min-h-screen w-full max-w-375 gap-5 px-3 py-3 sm:px-5 lg:grid-cols-[minmax(0,1fr)_12rem] lg:px-7">
                <section className="min-w-0 flex-1 rounded-xl border border-white/10 bg-[#111111] px-5 py-7 sm:px-8 lg:px-12 lg:py-10">
                    <div id="overview" className="max-w-4xl">
                        <h1 className="mt-5 text-2xl font-semibold tracking-tight sm:text-3xl">Design Systems</h1>
                        <p className="mt-4 max-w-4xl text-lg leading-8 text-white/60">
                            Browse real-world design system examples — brand-grade palette, typography, motion and voice your coding agent can snap any project to. Every system is open-source and runs with Claude, Codex, Cursor and more.                        </p>
                    </div>

                    <div id="skills" className="pt-10">
                        {skills.map((skill) => (
                            <ContentCard key={skill.id} {...skill} />
                        ))}
                    </div>
                </section>
                <PageSectionsNav sections={sections} />
            </div>
            
        </main>
    )
}