import React, { useEffect } from 'react'

import alanBtn from '@alan-ai/alan-sdk-web'

const alanKey =
  '2fa4db26e51eefb4b9b150b7794734d62e956eca572e1d8b807a3e2338fdd0dc/stage'
export const App = () => {
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command }) => {
        if (command === 'testCommand') {
          alert('this code was executed')
        }
      },
    })
  }, [])

  return (
    <div>
      <h1>Alan AI App</h1>
    </div>
  )
}
