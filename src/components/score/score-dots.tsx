//import { IconSquareDot, IconSquareDotFilled } from "@tabler/icons-react";
import { IconSquareDot, IconSquareDotFilled } from "@tabler/icons-react";
import React, { useState } from "react";

interface ScoreDotsProps {
    filledItems: number
    unfilledItems: number
}

export const ScoreDots: React.FC<ScoreDotsProps> = ({ filledItems, unfilledItems }) => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [theme, _useTheme] = useState(() => {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark'
        } else {
            return 'light'
        }
    })

    const filledArr: React.ReactElement[] = [];
    for (let i = 0; i < filledItems; i++) {
        filledArr.push(
            <span key={i} className={`${theme === 'dark' ? 'text-slate-900' : 'text-slate-400'}`}>
                <IconSquareDotFilled color="currentcolor" />
            </span>
        );
    }

    const unfilledArr: React.ReactElement[] = [];
    for (let i = 0; i < unfilledItems; i++) {
        unfilledArr.push(
            <span key={i} className={`${theme === 'dark' ? 'text-slate-900' : 'text-slate-400'}`}>
                <IconSquareDot key={i} color='currentColor' />
            </span>
        );
    }

    return (
        <span className="text-gray-700 flex flex-row">
            {filledArr}
            {unfilledArr}
        </span>
    )

}




