import { Button, CardActionArea, CardActions } from '@mui/material'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import React from 'react'
import Typography from '@mui/material/Typography'
import useStyles from './styles'

export const NewsCard = ({
  article: { description, publishedAt, source, title, url, urlToImage },
  index,
}) => {
  const classes = useStyles()
  return (
    <Card className={classes.card}>
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
