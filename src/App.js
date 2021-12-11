import React, { useEffect, useState } from 'react'

import { NewsCards } from './components/newsCards/newsCards'
import alan from './images/alan.jpg'
import alanBtn from '@alan-ai/alan-sdk-web'
import useStyles from './styles.js'
import wordsToNumbers from 'words-to-numbers'

const alanKey =
  '2fa4db26e51eefb4b9b150b7794734d62e956eca572e1d8b807a3e2338fdd0dc/stage'

export const App = () => {
  const [newsArticles, setNewsArticles] = useState([])
  const [activeArticle, setActiveArticle] = useState(-1)

  const classes = useStyles()

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles, number }) => {
        if (command === 'newHeadlines') {
          setNewsArticles(articles)
          setActiveArticle(-1)
        } else if (command === 'highlight') {
          setActiveArticle((prev) => prev + 1)
        } else if (command === 'open') {
          const parsedNumber =
            number.length > 2 ? wordsToNumbers(number, { fuzzy: true }) : number
          const article = articles[parsedNumber - 1]

          if (parsedNumber > 20) {
            alanBtn().playText('Please try that again. ')
          } else if (article) {
            window.open(article.url, '_blank')
            alanBtn().playText('Opening...')
          }
        }
      },
    })
  }, [])

  return (
    <div>
      <div className={classes.logoContainer}>
        <img src={alan} className={classes.alanLogo} alt='alan logo' />
      </div>

      <NewsCards articles={newsArticles} activeArticle={activeArticle} />
    </div>
  )
}
