import React from 'react'
import ReactDOM from 'react-dom'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { Provider } from 'react-redux'
import {ColorModeSwitch} from './components/ColorModeSwitch'
import './index.css'
import Router from './routes'
import theme from './styles/theme'
import {store} from './store'

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript />
      <Provider store={store}>
        <ColorModeSwitch />      
        <Router />
      </Provider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
