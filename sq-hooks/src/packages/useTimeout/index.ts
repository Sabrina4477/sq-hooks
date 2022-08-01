import { useEffect, useRef } from "react"


type CallBack = () => void

export default function useTimeout(cb:CallBack, time:number){
    const fn = useRef(cb)

    useEffect(() => {
        fn.current = cb
    }, [cb])

    useEffect(() => {
        const trigger = () => fn.current && fn.current
        const timerID = setTimeout(trigger, time)
        return () => clearTimeout(timerID)
    }, [time])
}