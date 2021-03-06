import Grid from '@mui/material/Grid'
import Grow from '@mui/material/Grow'
import { NewsCard } from '../newsCard/newsCard'
import React from 'react'
import Typography from '@mui/material/Typography'
import useStyles from './styles'

export const NewsCards = ({ articles, activeArticle }) => {
  const classes = useStyles()

  const infoCards = [
    {
      color: '#283593',
      title: 'How to use app',
      info: 'read out the commands after clicking on the microphone to give alan your instruction',
      text: 'hello ',
    },
    { color: '#00838f', title: 'Latest News', text: 'Give me the latest news' },
    {
      color: '#1565c0',
      title: 'News by Categories',
      info: 'Business, Entertainment, General, Health, Science, Sports, Technology',
      text: 'Give me the latest Technology news',
    },
    {
      color: '#4527a0',
      title: 'News by Terms',
      info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...',
      text: "What's up with PlayStation 5",
    },
    {
      color: '#283593',
      title: 'News by Sources',
      info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...',
      text: 'Give me the news from CNN',
    },
    {
      color: '#1565c0',
      title: 'Back to home',
      info: 'Takes you back to the home screen',
      text: 'go back, or back',
    },
  ]
  if (!articles.length) {
    return (
      <Grow in>
        <Grid
          className={classes.container}
          container
          alignItems='stretch'
          spacing={3}
        >
          {infoCards.map((infoCard, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className={classes.infoCard}
              key={index}
            >
              <div
                className={classes.card}
                style={{ backgroundColor: infoCard.color }}
              >
                <Typography variant='h5'>{infoCard.title}</Typography>
                {infoCard.info ? (
                  <Typography variant='h6'>
                    <strong>{infoCard.title.split(' ')[2]} :</strong>
                    <br />
                    {infoCard.info}
                  </Typography>
                ) : null}
                <Typography variant='h6'>
                  Try saying: <br /> <i>{infoCard.text}</i>
                </Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grow>
    )
  }

  return (
    <Grow in>
      <Grid
        className={classes.container}
        container
        alignItems='stretch'
        spacing={3}
      >
        {articles.map((article, i) => {
          return (
            <Grid
              item
              key={i}
              xs={12}
              sm={6}
              md={4}
              lg={3}
              style={{ display: 'flex' }}
            >
              <NewsCard
                article={article}
                index={i}
                activeArticle={activeArticle}
              />
            </Grid>
          )
        })}
      </Grid>
    </Grow>
  )
}
