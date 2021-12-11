import React, { useEffect, useState } from 'react'

import { NewsCard } from './components/newsCard/newsCard'
import { NewsCards } from './components/newsCards/newsCards'
import alanBtn from '@alan-ai/alan-sdk-web'

const alanKey =
  '2fa4db26e51eefb4b9b150b7794734d62e956eca572e1d8b807a3e2338fdd0dc/stage'
export const App = () => {
  const [newsArticles, setNewsArticles] = useState([])
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === 'newHeadlines') {
          setNewsArticles(articles)
        }
      },
    })
  }, [])

  return (
    <div>
      <h1>Alan AI App</h1>
      <NewsCards articles={newsArticles} />
    </div>
  )
}
