import { Button, CardActionArea, CardActions } from '@mui/material'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import React from 'react'
import Typography from '@mui/material/Typography'

export const NewsCard = ({
  article: { i, description, publishedAt, source, title, url, urlToImage },
}) => {
  return (
    <Card>
      <CardActionArea>
        <CardMedia image={urlToImage} />
        <div>
          <Typography variant='body2' component='h2'>
            {new Date(publishedAt).toDateString()}
          </Typography>
          <Typography variant='body2' component='h2'>
            {source.name}
          </Typography>
        </div>
        <Typography gutterBottom variant='h5'>
          {title}
        </Typography>
        <CardContent>
          <Typography variant='body2' color='textSecondary' component='p'>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size='small' color='primary'>
          Learn More
        </Button>
        <Typography variant='h5' color='textSecondary'>
          {i + 1}
        </Typography>
      </CardActions>
    </Card>
  )
}
