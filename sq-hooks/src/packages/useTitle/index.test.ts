
import { renderHook } from '@testing-library/react'
import useTitle from './index'

test('useTitle - should update document title', () => {
    const {rerender} = renderHook((props:string) => useTitle(props),{
        initialProps:'Current Page Title'
    })
    expect(document.title).toBe('Current Page Title')
    rerender('Other Page Title')
    expect(document.title).toBe('Other Page Title')
})

test('useTitle - should restore document title on unmount', () => {
    document.title = 'Old Title'
    const view = renderHook((props:string) => useTitle(props),{
        initialProps:'Current Page Title'
    })

    expect(document.title).toBe('Current Page Title')
    view.unmount()
    expect(document.title).toBe('Old Title')
})