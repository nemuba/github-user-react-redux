import React from 'react'
import { Table, Tr, Td, Th, Thead, Tbody, Tfoot, TableCaption, Spinner } from '@chakra-ui/react'
import { useSelector } from 'react-redux'

const SearchList = () => {
  const {value, loading} = useSelector(state => state.user)

  return(
    <Table variant='simple'>
      <TableCaption>Github user information</TableCaption>
      <Thead>
        <Tr>
          <Th>Username</Th>
          <Th isNumeric>Repositories</Th>
          <Th isNumeric>Followers</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>{loading ? (<Spinner />) : value?.login}</Td>
          <Td isNumeric>{ loading ? (<Spinner />) : value?.public_repos}</Td>
          <Td isNumeric>{loading ? (<Spinner />) : value?.followers}</Td>
        </Tr>
      </Tbody>
      <Tfoot>
        <Tr>
          <Th>Username</Th>
          <Th isNumeric>Repositories</Th>
          <Th isNumeric>Followers</Th>
        </Tr>
      </Tfoot>
    </Table>
  )
}

export default SearchList
