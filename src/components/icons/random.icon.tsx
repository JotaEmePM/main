import { IconCloudCode, IconCode, IconCodeCircle2, IconCodeDots, IconFileCode, IconFolderCode, IconHeartCode, IconScript, IconSourceCode, IconUserCode } from "@tabler/icons-react"

export const RandomIcon = () => {

    const iconId = Math.floor(Math.random() * 10)

    switch (iconId) {
        case 1:
            return (<IconCode />)
        case 2:
            return (<IconCodeCircle2 />)
        case 3:
            return (<IconSourceCode />)
        case 4:
            return (<IconFileCode />)
        case 5:
            return (<IconFolderCode />)
        case 6:
            return (<IconUserCode />)
        case 7:
            return (<IconCloudCode />)
        case 8:
            return (<IconHeartCode />)
        case 9:
            return (<IconScript />)
        case 10:
            return (<IconCodeDots />)
        default:
            return (<IconCode />)
    }

}