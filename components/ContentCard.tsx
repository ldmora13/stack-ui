import Link from "next/link";
import { twMerge } from "tailwind-merge";

export type ContentType = {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    linkUrl: string;
    classNameImg?: string;
};

export function ContentCard({id, title, description, imageUrl, linkUrl, classNameImg}: {id: string, title: string, description: string, imageUrl: string, linkUrl: string, classNameImg?: string}) {
    return (
        <div id={id} className="mt-20 scroll-mt-6 grid max-w-5xl h-auto md:max-h-75 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 md:grid-cols-2">
            <div className="bg-[#171717] p-5">
                <div className="flex items-center justify-between gap-4">
                    <p className="mt-2 text-xl font-semibold uppercase tracking-[0.12em]">{title}</p>
                </div>
                <p className='mt-10 text-md text-white/80'>{description}</p>
                
            </div>
            <Link href={linkUrl} target="_blank" rel="noopener noreferrer">
                <img alt={title} src={imageUrl}
                    className={twMerge("w-full object-cover", classNameImg)} />
            </Link>
        </div>
    )
}