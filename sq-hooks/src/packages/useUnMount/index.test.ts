import useUnMount from ".";
import {renderHook} from '@testing-library/react-hooks'

test('useUnMount should work', () => {
    const fn = jest.fn()
    const view = renderHook(() => useUnMount(fn))
    // 组件重渲染不会引起回调函数重执行
    expect(fn).toBeCalledTimes(0)
    view.rerender()
    expect(fn).toBeCalledTimes(0)
    // 组件卸载时回执行一次
    view.unmount()
    expect(fn).toBeCalledTimes(1)
})