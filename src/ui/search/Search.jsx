import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserByName } from '../../store/reducers/users'
import { FormControl, FormLabel, Input , Button, Box, Stack, useToast } from '@chakra-ui/react'
import SearchList from './SearchList'
import { hasPresent } from '../../services/functions'


const Search = () => {
  const dispatch = useDispatch()
  const { value, loading, error } = useSelector(state => state.user)
  const [search, setSearch] = useState('')
  const toast = useToast()

  const handleSearch = (username) => {
    dispatch(fetchUserByName(search))
  }

  const handleClear = () => setSearch('')

  useEffect(() => {
    if (hasPresent(error)) {
      toast({
        position: 'top-right',
        title: `Error ${error.status}`,
        description: error.message,
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    }
  }, [error])

  return (
    <Box w="100%" p={3}>
      <Stack spacing={3}>
        <Box>
          <FormControl>
            <FormLabel htmlFor="search">Search user in github</FormLabel>
            <Input
              id="search"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </FormControl>
          <Button
            variant="outline"
            mt={3}
            color="blue.500"
            onClick={() => handleSearch(search)}
            isLoading={loading}
            isDisabled={loading}
          >
            Search
          </Button>
          <Button
            variant="outline"
            mt={3}
            ml={2}
            color="blue.500"
            onClick={() => handleClear()}
            >Clear</Button>
        </Box>
        <Box>
          { hasPresent(value) && <SearchList />}
        </Box>
      </Stack>
    </Box>
  )
}

export default Search;
