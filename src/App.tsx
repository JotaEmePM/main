import { IconArrowNarrowRight, IconBrandGithub } from "@tabler/icons-react"
import { CV_URL, HOMEPAGE_URL } from "./Config"
import { RandomIcon } from "./components/icons/random.icon"
import { ThemeToggle } from "./components/buttons/themetogglebutton"
import { FooterSection } from "./components/footer/footer-section"
import { NewsSection } from "./components/blog/news-section"


function App() {

  return (
    <>
      <header className="fixed w-full p-2 z-20 backdrop-blur-md">
        <div className="mx-auto max-w-3xl">
          <nav className="flex items-center gap-3 text-base justify-between">
            <a href="/" className="group">
              <h2 className="font-semibold tracking-tighter p-2 font-mplus text-lg inline-flex gap-2">
                <RandomIcon />
                JotaEmePM - Developer place
              </h2>

            </a>
            <div className="flex gap-x-6">
              <div className="items-center gap-6 hidden md:flex">
                <a href={HOMEPAGE_URL}>Acerca de mí</a>
                <a href="/GitHub" className="inline-flex items-center gap-[4px]">
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
      <main className="pt-[56px]">
        {/* MastHead Section */}
        <section className="relative mb-6 h-80 flex justify-center items-center">
          <div className="absolute w-full h-full overflow-hidden">
            <div className="absolute h-auto left-1/2 top-1/2 min-w-full min-h-full object-cover bg-slate-500 -translate-x-1/2 -translate-y-1/2 opacity-30">&nbsp;</div>
          </div>
          <div className="z-10 text-center px-8 drop-shadow-lg shadow-black">
            <div className="uppercase text-sm mb-4">Welcome to</div>
            <div className="text-4xl font-mplus">A curated list of the tech <span className="text-sky-500">I use</span></div>
          </div>
        </section>
        {/* MastHead Section */}
        <h1 className="font-mplus text-center">Blog</h1>
        <article className="px-8 mx-auto max-w-3xl">
          <section>
            <p className="mb-8 indent-4">
              Ex cupidatat labore laboris enim enim veniam labore est consectetur do minim minim velit id. Laborum exercitation excepteur mollit exercitation ipsum enim ea aliqua duis ut occaecat ullamco magna. Consectetur aute aute reprehenderit magna ea pariatur eiusmod Lorem proident qui.
              <a className="inline-flex items-center gap-1 indent-1 text-orange-500" href={CV_URL} >Aprende acerca de mí <IconArrowNarrowRight /></a>
            </p>
          </section>
          <NewsSection />
        </article>
      </main>
      <FooterSection />
    </>
  )
}

export default App
