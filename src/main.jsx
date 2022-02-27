import React from 'react'
import ReactDOM from 'react-dom'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { Provider } from 'react-redux'
import './index.css'
import App from './App'
import theme from './styles/theme'
import {store} from './store'

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript />
      <Provider store={store}>
        <App />
      </Provider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
