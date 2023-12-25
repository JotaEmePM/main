import { IconArrowNarrowRight } from "@tabler/icons-react"
import { CV_URL } from "../../Config"
import { NewsSection } from "../../components/blog/news-section"

export const MainPage = () => {
    return (
        <>
            <article className="px-8 mx-auto max-w-3xl">
                <section className="mb-8 indent-4 text-">
                    <p className="">
                        Te doy la bienvenida a mi blog, donde podrás encontrar noticias, proyectos, investigaciones, curiosidades, enlaces de interés y mucha más información. Este blog ha sido desarrollado en React como parte de mi proceso de autoaprendizaje en la biblioteca. Utiliza una API construida en Express y MongoDB como base de datos. Si estás interesado en revisar el código fuente de esta aplicación, puedes acceder a mi perfil de GitHub a través del icono ubicado en la parte superior.
                    </p>
                    <p className="mt-2">
                        <a className="inline-flex items-center gap-1 indent-1 text-orange-500" href={CV_URL} >Si quieres ver mi perfil profesional ingresa acá<IconArrowNarrowRight /></a>
                    </p>
                </section>
            </article>
            <article className="mb-4">
                <h2 className="text-center font-mplus text-2xl">Ultimas entradas del blog</h2>
            </article>
            <NewsSection />
        </>
    )
}