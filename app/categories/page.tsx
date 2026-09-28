import { BackgroundRippleEffectDemo } from "@/components/BackgroundRippleEffect";
import { CardSpotlightDemo } from "@/components/CardSpotlight";

export default function Home() {
    return (
        <main className="min-h-screen overflow-x-hidden bg-background font-sans text-foreground dark:bg-black">
            <section className="relative isolate min-h-screen w-full">
                <div className="absolute inset-0 z-0">
                    <BackgroundRippleEffectDemo />
                </div>
                <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-16 text-center sm:px-6 sm:pt-24">
                    <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                        Build in the way that works best for you.
                    </h1>
                    <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
                        Explore our categories and find the perfect solution for your needs.
                    </p>
                    
                </div>
                <div className="relative z-10 mx-auto mt-16 w-full max-w-7xl px-5 sm:mt-28 sm:px-6">
                    <CardSpotlightDemo />
                </div>
                <p className="mx-auto mt-16 max-w-3xl px-5 pb-6 text-center text-sm text-muted-foreground sm:mt-20 sm:px-6">
                    All resources are created and maintained by their respective authors. We simply curate and showcase them in one place.
                </p>
            </section>
        </main>
    );
}