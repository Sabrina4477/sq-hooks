import { renderHook } from "@testing-library/react"
import useMount from "."


test('useMount', () => {
    const fn = jest.fn()
    const view = renderHook(() => useMount(fn))
    expect(fn).toBeCalledTimes(1)
    view.rerender()
    expect(fn).toBeCalledTimes(1)
})