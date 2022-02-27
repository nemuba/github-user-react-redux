import { Box } from '@chakra-ui/react'
import {ColorModeSwitch} from './components/ColorModeSwitch'
import Search from './ui/search/Search'

function App() {

  return (
    <Box w="100%" p={3}>
      <ColorModeSwitch />      
      <Box w="100%" px="36">
        <Search />
      </Box>
    </Box>
  )
}

export default App
