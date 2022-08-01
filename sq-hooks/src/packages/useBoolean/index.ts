import { useState } from "react"

interface Action{
    setTrue:() => void
    setFalse:() => void
}

export default function useBoolean(defaultValue = false):[boolean, Action]{
    const [state, setState] = useState(defaultValue)
    const setTrue = () => setState(true)
    const setFalse = () => setState(false)
    return [
        state,
        {
            setTrue,
            setFalse
        }
    ]
}