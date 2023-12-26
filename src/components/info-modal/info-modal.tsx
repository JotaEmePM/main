import { IconHelpHexagon, IconX } from "@tabler/icons-react"
import { ReactElement, useState } from "react"

interface ModalData {
    title: string
    icon: ReactElement
    content: ReactElement | string
}
export const InfoModal: React.FC<ModalData> = ({ title, icon, content }: ModalData) => {

    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button type="button" onClick={() => setShowModal(true)}>
                <IconHelpHexagon />
            </button>
            {showModal ? (
                <>
                    <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative my-6 mx-auto  sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white dark:bg-slate-400 outline-none focus:outline-none">
                                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                                    <div className="flex flex-row gap-2 items-center text-black dark:text-slate-900">
                                        {icon}
                                        <h3 className="text-md font=semibold">
                                            {title}
                                        </h3>
                                    </div>
                                    <button className="bg-transparent border-0 text-black float-right" onClick={() => setShowModal(false)}>
                                        <span className="text-black opacity-7 h-6 w-6 text-sm block bg-gray-400 dark:bg-slate-300 py-0 rounded-full">
                                            <IconX />
                                        </span>
                                    </button>
                                </div>
                                <div className="relative p-6 flex-auto">
                                    {content}
                                </div>
                                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    <button className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Cerrar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : null
            }
        </>

    )

}