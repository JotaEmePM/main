//import { IconSquareDot, IconSquareDotFilled } from "@tabler/icons-react";
import { IconSquareDot, IconSquareDotFilled } from "@tabler/icons-react";

interface ScoreDotsProps {
    filledItems: number
    unfilledItems: number
}

export const ScoreDots: React.FC<ScoreDotsProps> = ({filledItems, unfilledItems}) => {

    const filledArr: JSX.Element[] = [];
    for (let i = 0; i < filledItems; i++) {
        filledArr.push(<IconSquareDotFilled key={i} />);
    }

    const unfilledArr: JSX.Element[] = [];
    for (let i = 0; i < unfilledItems; i++) {
        unfilledArr.push(<IconSquareDot key={i} />);
    }

    return (
        <span className="text-gray-700 flex flex-row">
            {filledArr}
            {unfilledArr}
        </span>
    )
    
}




