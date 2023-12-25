import { useEffect, useState } from "react"
import { PaginationPostInterface } from "../../interfaces/Post.interface"
import { getAllPost } from "../../services/post-service"


export const NewsSection = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [posts, setPosts] = useState<PaginationPostInterface>()

    useEffect(() => {
        const fetchData = async () => {
            const data = await getAllPost() as PaginationPostInterface

            setPosts(data)
            setIsLoading(false)
            console.info(data)
        }

        fetchData()
            .catch(console.error);
    }, [])

    return (
        <section className="">
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {
                    (isLoading) ?
                        (<li>cargando...</li>) :
                        (
                            posts?.docs.map((post) => (
                                <li key={post.slug} className="text-center mb-4 dark:bg-slate-200 p-2 dark:bg-opacity-5 bg-gray-400 bg-opacity-10 pb-4 rounded-lg">
                                    <a href={`/blog/${post.slug}}`}>
                                        {
                                            (post.image !== '') ? (
                                                <img
                                                    className="border border-slate-300 dark:boder-zinc-700 rounded-xl"
                                                    src={post.image}
                                                    width={720 * 2}
                                                    alt="Thumbnail"
                                                />
                                            ) : (
                                                <img
                                                    className="border border-slate-300 dark:boder-zinc-700 rounded-xl"
                                                    src="/blog-icon.png"
                                                    width={720 * 2}
                                                    alt="blog-item"
                                                />
                                            )
                                        }
                                        <div className="mt-3 text-xl capitalize">
                                            {post.title}
                                        </div>
                                        <div className="opacity-70">
                                            {/* {post.subtitle} - {post.publicationDate} */}
                                            {post.subtitle}
                                        </div>
                                        <p className="">
                                            {post.trimcontent}
                                        </p>
                                        <span className="text-orange-500 font-bold">Ver más</span>
                                    </a>
                                </li>
                            ))
                            
                        )

                }
            </ul>
        </section>
    )
}