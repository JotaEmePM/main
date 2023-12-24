const posts = [
    {
        id: 1,
        slug: 'titulo-del-post',
        title: 'titulo del post',
        subtitle: 'subtitle del post',
        published: new Date().toDateString(),
        publishedBy: 'JotaEmePM',
        img: 'https://placehold.co/600x400',
        precontent: 'Cillum occaecat enim elit eiusmod dolor ad deserunt nulla eiusmod elit eiusmod exercitation non aute.'
    },
    {
        id: 2,
        slug: 'titulo-del-post2',
        title: 'titulo del post 2',
        subtitle: 'subtitle del post 2',
        published: new Date().toDateString(),
        publishedBy: 'JotaEmePM',
        img: 'https://placehold.co/600x400',
        precontent: 'Cillum occaecat enim elit eiusmod dolor ad deserunt nulla eiusmod elit eiusmod exercitation non aute.'
    },
    {
        id: 3,
        slug: 'titulo-del-post2',
        title: 'titulo del post 2',
        subtitle: 'subtitle del post 2',
        published: new Date().toDateString(),
        publishedBy: 'JotaEmePM',
        img: 'https://placehold.co/600x400',
        precontent: 'Cillum occaecat enim elit eiusmod dolor ad deserunt nulla eiusmod elit eiusmod exercitation non aute.'
    },
    {
        id: 4,
        slug: 'titulo-del-post2',
        title: 'titulo del post 2',
        subtitle: 'subtitle del post 2',
        published: new Date().toDateString(),
        publishedBy: 'JotaEmePM',
        img: 'https://placehold.co/600x400',
        precontent: 'Cillum occaecat enim elit eiusmod dolor ad deserunt nulla eiusmod elit eiusmod exercitation non aute.'
    },
    {
        id: 5,
        slug: 'titulo-del-post2',
        title: 'titulo del post 2',
        subtitle: 'subtitle del post 2',
        published: new Date().toDateString(),
        publishedBy: 'JotaEmePM',
        img: 'https://placehold.co/600x400',
        precontent: 'Cillum occaecat enim elit eiusmod dolor ad deserunt nulla eiusmod elit eiusmod exercitation non aute.'
    },
    {
        id: 6,
        slug: 'titulo-del-post2',
        title: 'titulo del post 2',
        subtitle: 'subtitle del post 2',
        published: new Date().toDateString(),
        publishedBy: 'JotaEmePM',
        img: 'https://placehold.co/600x400',
        precontent: 'Cillum occaecat enim elit eiusmod dolor ad deserunt nulla eiusmod elit eiusmod exercitation non aute.'
    },
]
export const NewsSection = () => {
    return (
        <section className="">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {posts.map(post => (
                    <li key={post.id} className="text-center mb-4">
                        <a href={`/blog/${post.slug}`}>
                            <img
                                className="border border-slate-300 dark:boder-zinc-700 rounded-xl"
                                src={post.img}
                                width={720 * 2}
                                alt="Thumbnail"
                            />
                            <div className="mt-3 text-xl">
                                {post.title}
                            </div>
                            <div className="opacity-70">
                                {post.subtitle}
                            </div>
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    )
}