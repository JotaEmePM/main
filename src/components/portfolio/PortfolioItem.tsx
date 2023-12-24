import { ReactElement } from 'react'
import { IconReportSearch } from "@tabler/icons-react"

interface PorfolioItemInterface {
    image: string
    url: string
    title: string
    description: string
    subdescription: string | ReactElement
}

export const PortfolioItem: React.FC<PorfolioItemInterface> = ({image, title, description, subdescription, url }) => {

    const urlImage = (image !== '') ? image: 'https://placehold.co/100x100'

    return (
        <div className="flex w-full items-center justify-between rounded-2xl bg-white p-3 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none mt-2">
            <div className="flex items-center">
                <div className="">
                    <img className="h-[100px] w-[100px] rounded-lg"
                        // src="https://placehold.co/100x100"
                        src={urlImage}
                        alt={title} />
                </div>
                <div className="ml-4">
                    <p className="text-base font-medium text-navy-700 dark:text-white">
                        {title}
                    </p>
                    <p className="mt-2 text-sm text-gray-600">
                        {description}
                        <a className="ml-1 font-medium text-brand-500 hover:text-brand-500 dark:text-white"
                            href={url}
                        >
                            {subdescription}
                        </a>
                    </p>
                </div>
            </div>
            <div className="mr-4 flex items-center justify-center text-gray-600 dark:text-white">
                <IconReportSearch />
            </div>
        </div>
    )
}