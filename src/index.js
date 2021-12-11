import './index.css'

import { createTheme, responsiveFontSizes } from '@mui/material/styles'

import { App } from './App'
import React from 'react'
import ReactDom from 'react-dom'
import { ThemeProvider } from '@mui/styles'

let theme = createTheme()
theme = responsiveFontSizes(theme)
ReactDom.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,

  document.getElementById('root')
)
