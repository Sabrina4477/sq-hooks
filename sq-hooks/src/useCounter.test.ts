import { renderHook } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import useCounter from "./useCounter"

test('shoule use counter', () => {
    const {result} = renderHook(() => useCounter())
    expect(result.current.count).toBe(0)
})

