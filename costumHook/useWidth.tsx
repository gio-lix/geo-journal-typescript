import {FC, useEffect, useState} from "react";



export const useWidth: any = () =>  {
    const hasWindow = typeof window !== "undefined"

    function getWindowsPara () {
        const width = hasWindow ? window.innerWidth : null
        const height = hasWindow ? window.innerHeight : null

        return {width, height}
    }
    const [windowsPara, setWindowsPara] = useState(getWindowsPara())

    useEffect(() => {
        if (hasWindow) {
            const handleResize = () => {
                setWindowsPara(getWindowsPara())
            }
            window.addEventListener('resize', handleResize)
            return () => window.removeEventListener('resize', handleResize)
        }
    },[hasWindow])

    return windowsPara
}
