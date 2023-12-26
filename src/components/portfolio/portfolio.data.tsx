import { ReactElement } from "react"

export interface PorfolioItemInterface {
    order: number
    image: string
    url: string
    gitUrl: string
    title: string
    description: string
    subdescription: string | ReactElement
}

export const PortfolioData: PorfolioItemInterface[] = [
    {
        order: 1,
        image: '',
        url: '',
        gitUrl: '',
        title: 'Blog',
        description: 'Blog desarrollado para mi portafolio',
        subdescription: '[React, MongoDB, Expres(API)]'
    },
    {
        order: 2,
        image: '',
        url: '',
        gitUrl: '',
        title: 'Vinyl Store',
        description: 'Tienda de vinilos',
        subdescription: '[React, MongoDB, Expres(API)]'
    },
    {
        order: 3,
        image: '',
        url: '',
        gitUrl: '',
        title: 'CV',
        description: 'Portafolio web',
        subdescription: '[React]'
    }
]


