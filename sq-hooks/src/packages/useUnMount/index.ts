
import { useEffect, useRef } from "react";

type Fn = () => void

export default function useUnMount(fn: Fn){
    const cbRef = useRef<Fn | null>(null)
    useEffect(() => {
        cbRef.current = fn
    }, [fn])

    useEffect(() => {
        const fn = cbRef.current
        return () => fn?.()
    },[])
}