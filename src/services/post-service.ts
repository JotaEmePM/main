import axios, { AxiosResponse } from "axios"
import { PaginationPostInterface } from "../interfaces/Post.interface"

export const getAllPost = async () => {
    try {
        const baseUrl = import.meta.env.VITE_BASE_URL_BLOG_API
        const response: AxiosResponse = await axios.get(`${baseUrl}/post`)
        console.log(response.data)
        return response.data as PaginationPostInterface

    } catch (error) {
        return {
            docs: [],
            hasMode: false,
            hasNextPage: false,
            hasPrevPage: false,
            limit: 0,
            nextPage: 0,
            page: 0,
            pagingCounter: 0,
            totalDocs: 0,
            totalPages: 0
        } as PaginationPostInterface
    }
}