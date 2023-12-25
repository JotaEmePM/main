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
                                <li key={post.slug}>{post.slug}</li>
                            ))
                        )

                }
            </ul>
        </section>
    )
}