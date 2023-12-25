import { Outlet } from "react-router-dom";
import { RandomIcon } from "../../components/icons/random.icon";
import { CV_URL, GITHUB_URL, HOMEPAGE_URL } from "../../Config";
import { ThemeToggle } from "../../components/buttons/themetogglebutton";
import { FooterSection } from "../../components/footer/footer-section";
import { IconBrandGithub } from "@tabler/icons-react";

export default function Root() {
    return (
        <>
            <header className="fixed w-full p-2 z-20 backdrop-blur-md">
                <div className="mx-auto max-w-3xl">
                    <nav className="flex items-center gap-3 text-base justify-between">
                        <a href={HOMEPAGE_URL} className="group">
                            <h2 className="font-semibold tracking-tighter p-2 font-mplus text-lg inline-flex gap-2">
                                <RandomIcon />
                                JotaEmePM - Developer place
                            </h2>

                        </a>
                        <div className="flex gap-x-6">
                            <div className="items-center gap-6 hidden md:flex">
                                <a href={CV_URL}>Acerca de mí</a>
                                <a href={GITHUB_URL} className="inline-flex items-center gap-[4px]">
                                    <IconBrandGithub />
                                    GitHub
                                </a>
                            </div>
                            <div className="flex-1">
                                <ThemeToggle />
                            </div>
                        </div>
                    </nav>

                </div>
            </header>
            <main className="px-8 mx-auto max-w-6xl pt-[86px]">

                {/* <section>
                    <p className="mb-8 indent-4">
                        Ex cupidatat labore laboris enim enim veniam labore est consectetur do minim minim velit id. Laborum exercitation excepteur mollit exercitation ipsum enim ea aliqua duis ut occaecat ullamco magna. Consectetur aute aute reprehenderit magna ea pariatur eiusmod Lorem proident qui.
                        <a className="inline-flex items-center gap-1 indent-1 text-orange-500" href={CV_URL} >Aprende acerca de mí <IconArrowNarrowRight /></a>
                    </p>
                </section> */}
                {/* <NewsSection /> */}
                <Outlet />
            </main>

            <FooterSection />

        </>
    )
}