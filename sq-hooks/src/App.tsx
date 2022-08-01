import React, { memo } from 'react'
// import { useBoolean } from './packages/useBoolean'
import useMount from './packages/useMount'
import { useTitle } from './packages'

const App = memo(() => {
  useTitle('ceshi')
  useMount(() => {
    console.log("haha");
  })

  return (
    <div>
      <div>this is App</div>
    </div>
  )
})

export default App