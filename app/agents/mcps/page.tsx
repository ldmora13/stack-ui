
import FrameworkAgnostic from '@/components/Frameworkagnostic';
import { PageSectionsNav, type PageSection } from '@/components/PageSectionsNav';
import { ContentCard, type ContentType } from "@/components/ContentCard";


const mcps: ContentType[] = [
    {
        id: 'playwright',
        title: 'Playwright MCP',
        description: 'This server enables LLMs to interact with web pages through structured accessibility snapshots, bypassing the need for screenshots or visually-tuned models.',
        imageUrl: 'https://agents-download.skywork.ai/image/rt/6c475e2acae9c3ff320e69f38d52f853.jpg',
        linkUrl: 'https://github.com/microsoft/playwright-mcp',
        classNameImg: 'h-full'
    },
    {
        id: 'github',
        title: 'GitHub MCP',
        description: 'This gives AI agents the ability to read repositories and code files, manage issues and PRs, analyze code, and automate workflows.',
        imageUrl: 'https://github.blog/wp-content/uploads/2025/04/430176017-a2926942-1c3d-4f95-bb73-861d8003aecb.png',
        linkUrl: 'https://github.com/github/github-mcp-server',
        classNameImg: 'h-full'
    },
    {
        id: 'context7',
        title: 'Context7 MCP',
        description: 'Context7 MCP provides LLMs with up-to-date, version-specific documentation and code examples directly from the source, preventing outdated or hallucinated responses.',
        imageUrl: 'https://cdn.hashnode.com/res/hashnode/image/upload/v1746118121636/6f8ced46-18e3-456c-8989-05a9414da455.png',
        linkUrl: 'https://github.com/upstash/context7'
    },
    {
        id: 'stitch',
        title: 'Stitch MCP',
        description: 'The Stitch Model Context Protocol (MCP) server allows your favorite AI tools like Cursor, Antigravity, or the Gemini CLI to directly interact with your Stitch projects.',
        imageUrl: 'https://pasqualepillitteri.it/uploads/img/news/google-stitch-agent-real-time-design-io-2026.png',
        linkUrl: 'https://stitch.withgoogle.com/docs/mcp/setup/'
    },
    {
        id: 'open-design',
        title: 'Open Design MCP',
        description: 'Open Design MCP enables LLMs to become the design engine: prototypes, landing pages, dashboards, slides, images & video — real files, HTML/PDF/PPTX/MP4 export.',
        imageUrl: 'https://github.com/nexu-io/open-design/raw/main/docs/assets/readme-hero-design-agent.webp',
        linkUrl: 'https://github.com/nexu-io/open-design'
    }
];

const sections: PageSection[] = [
    { id: 'overview', label: 'Overview' },
    { id: 'playwright', label: 'Playwright' },
    { id: 'github', label: 'Github' },
    { id: 'context7', label: 'Context7' },
    { id: 'stitch', label: 'Stitch' },
    { id: 'open-design', label: 'Open Design' },
];


export default function Home(){
    return (
        <main className="min-h-screen overflow-x-clip bg-[#090909] font-sans text-[#f2f0eb]">
            <div className="mx-auto grid min-h-screen w-full max-w-375 gap-5 px-3 py-3 sm:px-5 lg:grid-cols-[minmax(0,1fr)_12rem] lg:px-7">
                <section className="min-w-0 flex-1 rounded-xl border border-white/10 bg-[#111111] px-5 py-7 sm:px-8 lg:px-12 lg:py-10">
                    <div id="overview" className="max-w-4xl">
                        <h1 className="mt-5 text-2xl font-semibold tracking-tight sm:text-3xl">MCPs</h1>
                        <p className="mt-4 max-w-4xl text-lg leading-8 text-white/60">
                            MCPs are connectors that give agents access to external tools, data, and services. They allow agents to interact with design tools, APIs, codebases, databases, and other resources, expanding what they can create and automate.</p>
                    </div>
                    <div className="flex items-center justify-center mt-10">
                        <FrameworkAgnostic />
                    </div>
                    <div id="skills">
                        {mcps.map((mcp) => (
                            <ContentCard key={mcp.id} {...mcp} />
                        ))}
                    </div>
                </section>
                <PageSectionsNav sections={sections} />
            </div>
            
        </main>
    )
}