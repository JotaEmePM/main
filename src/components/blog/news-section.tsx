import { useEffect, useState } from "react"
import { PaginationPostInterface } from "../../interfaces/Post.interface"
import { getAllPost } from "../../services/post-service"
import moment from "moment"
import { Link } from "react-router-dom"




export const NewsSection = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [posts, setPosts] = useState<PaginationPostInterface>()

    useEffect(() => {
        const fetchData = async () => {
            const data = await getAllPost() as PaginationPostInterface

            setPosts(data)
            setIsLoading(false)
        }

        fetchData()
            .catch(console.error);
    }, [])

    return (
        <section className="">
            {
                (isLoading) ? (
                    <div className="flex flex-rows text-center items-center h-24">
                        <span className="text-center text-orange-500">
                            Cargando...
                        </span>
                    </div>
                ) :
                    (
                        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                            {
                                posts?.docs.map((post) => {
                                    return (
                                        <li key={post.slug} className="text-center mb-4 dark:bg-slate-200 p-2 dark:bg-opacity-5 bg-gray-400 bg-opacity-10 pb-4 rounded-lg">
                                            <Link to={`/blog/${post.slug}`}>
                                                {
                                                    (post.img !== '') ? (
                                                        <img
                                                            className="border border-slate-300 dark:boder-zinc-700 rounded-xl"
                                                            src={post.img}
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
                                                <div className="opacity-40">
                                                    {post.subtitle} - {moment(post.creationDate).format('DD-MM-YYYY')}
                                                </div>
                                                <p className="">
                                                    {post.trimcontent}
                                                </p>
                                                <span className="text-orange-500 font-bold">Ver más</span>
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    )
            }
        </section>
    )
}