import Link from "next/link";
import { LayersIcon } from "./UI/Icon";


export default function Header() {
    return (
        <header className="fixed top-4 left-1/2 z-50 w-[90%] max-w-2xl -translate-x-1/2">
            <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-6 py-4 shadow-lg backdrop-blur-md">
                <div>
                    <Link href="/" className="flex items-center gap-2 ">
                        <LayersIcon />
                        <span className="text-lg font-bold text-white">UI</span>
                    </Link>
                </div>
                <div>
                    <nav>
                        <ul className="flex items-center gap-4 text-sm text-white/50">
                            <li> <Link href="/agents" className="hover:text-white/75">Agents</Link> </li>
                            <li> <Link href="/categories" className="hover:text-white/75">Categories</Link> </li>
                            <li> <Link href="/components" className="hover:text-white/75">Components</Link> </li>
                            <li> <Link href="/about" className="hover:text-white/75">About</Link> </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
        
    )
}