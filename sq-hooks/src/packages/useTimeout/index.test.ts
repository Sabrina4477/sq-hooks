// 某个事件之后 回调确实会自动执行
// 组件卸载之后 回调不再执行，timmer被清理掉

import { renderHook } from "@testing-library/react"
import useTimeout from "."


const timeout = (time:number) => {
    new Promise((resolve) =>  setTimeout(resolve, time))
}

// test('executes after time', async() => {
//     const fn = jest.fn()
//     renderHook(() => useTimeout(fn, 4))
//     await timeout(5)
//     expect(fn).toHaveBeenCalled()
// })

test('stop on unmount', async() => {
    const fn = jest.fn()
    const view = renderHook(() => useTimeout(fn, 4))
    view.unmount()
    await timeout(5)
    expect(fn).not.toHaveBeenCalled()
})