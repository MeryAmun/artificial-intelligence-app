import Grid from '@mui/material/Grid'
import Grow from '@mui/material/Grow'
import { NewsCard } from '../newsCard/newsCard'
import React from 'react'
import Typography from '@mui/material/Typography'

export const NewsCards = ({ articles }) => {
  return (
    <Grow in>
      <Grid container alignItems='stretch' spacing={3}>
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
              <NewsCard article={article} i={i} />
            </Grid>
          )
        })}
      </Grid>
    </Grow>
  )
}
