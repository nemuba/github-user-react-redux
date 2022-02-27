import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserByName } from '../../store/reducers/users'
import { FormControl, FormLabel, Input , Button, Box, Stack} from '@chakra-ui/react'
import SearchList from './SearchList'

const Search = () => {
  const dispatch = useDispatch()
  const { value, loading } = useSelector(state => state.user)
  const [search, setSearch] = useState('')

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
            onClick={() => dispatch(fetchUserByName(search))}
            isLoading={loading}
            isDisabled={loading}
          >
            Search
          </Button>
        </Box>
        <Box>
          {value && (Object.keys(value).length !== 0) && <SearchList />}
        </Box>
      </Stack>
    </Box>
  )
}

export default Search;
