import { useParams } from "react-router-dom"

export const BlogPost = () => {

    const { slug } = useParams()

    return (
        <h1>{slug}</h1>
    )
}