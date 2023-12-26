import { WorkExperienceItem } from "./WorkExperienceItem"
import { WorkExperienceData, WorkExperienceInterface } from "./experience.data"

export const WorkExperienceSection = () => {
    const data: WorkExperienceInterface[] = WorkExperienceData

    return (
        <>
            {
                data.slice().sort((a, b) => a.order - b.order).map(({ order, brand, position, period, details }: WorkExperienceInterface) => {
                    return (
                        <WorkExperienceItem
                            key={order}
                            order={order}
                            brand={brand}
                            position={position}
                            period={period}
                            details={details}
                        />
                    )
                })
            }
        </>
    )
}