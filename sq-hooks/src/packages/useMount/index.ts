import { useEffect, useRef } from "react"

type Fn = () => void

export default function useMount(fn:Fn){

    const cbRef = useRef<Fn | null>(null)

    useEffect(() => {
        cbRef.current = fn
    }, [fn])

    useEffect(() => {
        const fn = cbRef.current
        // 如果有则调用
        fn?.()
    },[fn])
}