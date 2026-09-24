import Link from "next/link";

import { LayersIcon } from "./UI/Icon";
import { TextMorph } from "./Textmorph";


export default function Header() {
    return (
        <header className="fixed left-1/2 top-4 z-50 w-[calc(100%-2rem)] max-w-2xl -translate-x-1/2">
            <div className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 shadow-lg backdrop-blur-md sm:px-6 sm:py-4">
                <div>
                    <Link href="/" className="flex items-center gap-2 ">
                        <LayersIcon />
                        <TextMorph words={["UI", "Stack"]} />
                    </Link>
                </div>
                <div>
                    <nav>
                        <ul className="flex items-center gap-2 text-xs text-white/50 sm:gap-4 sm:text-sm">
                            <li> <Link href="/categories" className="hover:text-white/75">Categories</Link> </li>
                            <li> <Link href="/components" className="hover:text-white/75">Components</Link> </li>
                            <li> <Link href="/agents" className="hover:text-white/75">Agents</Link> </li>
                            <li> <Link href="/about" className="hover:text-white/75">About</Link> </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
        
    )
}