import { useEffect, useRef } from "react"

export default function useTitle(title:string){
    const titleRef = useRef(document.title)
    useEffect(() => {
        document.title = title
        return () => {
            document.title = titleRef.current
        }
    }, [title])
    
}