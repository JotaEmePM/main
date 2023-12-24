import { ReactElement } from "react"

interface EducationItemInterface {
    name: string
    icon: ReactElement
    description: ReactElement | string
}

export const EducationItem :React.FC<EducationItemInterface>= ({name, icon, description}) => {
    return (
        <div className="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative">
            <div className="w-6 flex flex-col items-center">
                <div className="flex relative h-5 justify-center items-center m-1 mr-2 w-4 mt-1 rounded-full ">
                    {icon}
                </div>
            </div>
            <div className="w-full items-center flex">
                <div className="mx-2 -mt-1  ">
                    {name}
                    <div className="text-xs truncate w-full normal-case font-normal -mt-1 text-gray-500">{description}</div>
                </div>
            </div>
        </div>
    )
}