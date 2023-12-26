import { IconDownload } from "@tabler/icons-react"
import { EducationItemData } from "./education.data"



export const EducationItem: React.FC<EducationItemData> = ({ order = 0, name, icon, description, cert = '', isLocalFile = false }: EducationItemData) => {
    return (
        <div className="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative">
            <div className="w-6 flex flex-col items-center">
                <div className="flex relative h-5 justify-center items-center m-1 mr-2 w-4 mt-1 rounded-full text-slate-300 ">
                    {icon}
                </div>
            </div>
            <div className="w-full items-center flex">
                <div className="mx-2 -mt-1 text-black dark:text-slate-300 font-medium ">
                    {name}
                    <span className='flex items-center'>
                        <div className="text-xs truncate w-full normal-case font-normal -mt-1 text-gray-500 dark:text-slate-300">{description}</div>

                        {(cert !== '' && isLocalFile) ? (
                            <a href={cert} title="descarga certificado" target="_blank" id={order.toString()} download>
                                <IconDownload size="18" />
                            </a>
                        ) : ""}
                        {(cert !== '' && !isLocalFile) ?
                            (
                                <a href={cert} title="descarga certificado" target="_blank">
                                    <IconDownload size="18" />
                                </a>
                            ) : ""}
                    </span>
                </div>
            </div>
        </div>
    )
}