import React, { useEffect, useState } from 'react'

import { NewsCards } from './components/newsCards/newsCards'
import alanBtn from '@alan-ai/alan-sdk-web'
import useStyles from './styles'

const alanKey =
  '2fa4db26e51eefb4b9b150b7794734d62e956eca572e1d8b807a3e2338fdd0dc/stage'

export const App = () => {
  const [newsArticles, setNewsArticles] = useState([])
  const [activeArticle, setActiveArticle] = useState(-1)
  const classes = useStyles()

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === 'newHeadlines') {
          setNewsArticles(articles)
          setActiveArticle(-1)
        } else if (command === 'highlight') {
          setActiveArticle((prev) => prev + 1)
        }
      },
    })
  }, [])

  return (
    <div className={classes.logoContainer}>
      <img
        src='https://alan.app/voice/images/previews/preview.jpg'
        className={classes.alanLogo}
        alt='alan logo'
      />
      <div></div>
      <NewsCards articles={newsArticles} activeArticle={activeArticle} />
    </div>
  )
}
