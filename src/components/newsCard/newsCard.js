import { Button, CardActionArea, CardActions } from '@mui/material'
import { createRef, useEffect, useState } from 'react'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import React from 'react'
import Typography from '@mui/material/Typography'
import classNames from 'classnames'
import useStyles from './styles'

export const NewsCard = ({
  article: { description, publishedAt, source, title, url, urlToImage },
  index,
  activeArticle,
}) => {
  const [elRefs, setElRefs] = useState([])
  const classes = useStyles()
  const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 50)

  useEffect(() => {
    setElRefs((refs) =>
      Array(20)
        .fill()
        .map((_, j) => refs[j] || createRef())
    )
  }, [])

  useEffect(() => {
    if (index === activeArticle && elRefs[activeArticle]) {
      scrollToRef(elRefs[activeArticle])
    }
  }, [index, activeArticle, elRefs])

  return (
    <Card
      ref={elRefs[index]}
      className={classNames(
        classes.Card,
        activeArticle === index ? classes.activeCard : null
      )}
    >
      <CardActionArea href={url} target='_blank'>
        <CardMedia className={classes.media} image={urlToImage} />
        <div className={classes.details}>
          <Typography variant='body2' component='h2'>
            {new Date(publishedAt).toDateString()}
          </Typography>
          <Typography variant='body2' component='h2'>
            {source.name}
          </Typography>
        </div>
        <Typography className={classes.title} gutterBottom variant='h5'>
          {title}
        </Typography>
        <CardContent>
          <Typography variant='body2' color='textSecondary' component='p'>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <Button size='small' color='primary'>
          Learn More
        </Button>
        <Typography variant='h5' color='textSecondary'>
          {index + 1}
        </Typography>
      </CardActions>
    </Card>
  )
}
