import { IconBrandGithub, IconReportSearch } from "@tabler/icons-react"
import { PorfolioItemInterface } from "./portfolio.data"



export const PortfolioItem: React.FC<PorfolioItemInterface> = ({ image, title, description, subdescription, url, gitUrl }) => {



    const urlImage = (image !== '') ? image : 'https://placehold.co/100x100'

    return (
        <div className="flex justify-between w-full  rounded-2xl bg-white p-3 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none mt-2">
            <a className="ml-1 font-medium text-brand-500 hover:text-brand-500 dark:text-black"
                href={url}
                target="_blank"
            >
                <div className="flex items-center">
                    <div className="">
                        <img className="h-[100px] w-[100px] rounded-lg"
                            // src="https://placehold.co/100x100"
                            src={urlImage}
                            alt={title} />
                    </div>
                    <div className="ml-4">
                        <p className="text-base font-medium text-navy-700 dark:text-black">
                            {title}
                        </p>
                        <p className="mt-2 text-sm text-gray-600">
                            {description}
                            {subdescription}
                        </p>
                    </div>
                </div>
            </a>
            <div className="flex items-center justify-center">
                <div className="mr-4 flex  text-gray-600 dark:text-black">
                    <a href={url} target="_blank">
                        <IconReportSearch />
                    </a>
                </div>
                <div className="mr-4 flex  text-gray-600 dark:text-black">
                    <a href={gitUrl} target="_blank">
                        <IconBrandGithub />
                    </a>
                </div>
            </div>
        </div>
    )
}