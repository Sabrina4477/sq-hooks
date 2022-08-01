import { renderHook } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import useBoolean from './index'

const setUp = (defaultValue?:boolean) => renderHook(() => useBoolean(defaultValue))

// 测试hook初始值
test('useBoolean-defaultValue', () => {
    const {result} = setUp()
    expect(result.current[0]).toBe(false)
})

// 测试setTrue方法
test('useBoolean-setTrue', () => {
    const {result} = setUp()
    act(() => {
        result.current[1].setTrue()
    })
    expect(result.current[0]).toBe(true)
})

// 测试setTrue方法
test('useBoolean-setFalse', () => {
    const {result} = setUp()
    act(() => {
        result.current[1].setFalse()
    })
    expect(result.current[0]).toBe(false)
})