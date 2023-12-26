import { PortfolioItem } from "./PortfolioItem"
import { PorfolioItemInterface, PortfolioData } from "./portfolio.data"

export const PortfolioSection: React.FC = () => {
    const data: PorfolioItemInterface[] = PortfolioData

    return (
        <>
            {
                data.slice().sort((a, b) => a.order - b.order).map(({ order, image, title, description, subdescription, url, gitUrl }: PorfolioItemInterface) => {
                    return (
                        <PortfolioItem
                            key={order}
                            order={order}
                            image={image}
                            title={title}
                            description={description}
                            subdescription={subdescription}
                            url={url}
                            gitUrl={gitUrl}
                        />
                    )
                })
            }
        </>
    )
}