import React, { ReactElement } from 'react'
import { InfoModal } from '../info-modal/info-modal'

interface SkillInterface {
    icon: ReactElement,
    title: string,
    content: ReactElement | string
}

export const Skill: React.FC<SkillInterface> = ({ icon, title, content }) => {
    return (
        <div className="flex items-center py-1">
            <span
                className="w-8 h-8 shrink-0 mr-4 rounded-full bg-blue-50 flex items-center justify-center"
            >
                {icon}
            </span>
            <div className="space-y-3 flex-1">
                <div className="flex items-center">
                    <h4
                        className="font-normal text-sm mr-auto text-black flex items-center gap-1"
                    >
                        {title}
                        {content !== "" ?
                        (<InfoModal title='Javascript y Typescript' icon={icon} content={content} />) : ""}
                    </h4>
                </div>
            </div>
        </div>
    )
}
