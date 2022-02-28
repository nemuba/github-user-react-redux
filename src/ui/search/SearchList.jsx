import React from 'react'
import { Table, Tr, Td, Th, Thead, Tbody, Tfoot, TableCaption, Spinner, Image } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const SearchList = () => {
  const {value, loading} = useSelector(state => state.user)

  return(
    <Table variant='simple'>
      <TableCaption>Github user information</TableCaption>
      <Thead>
        <Tr>
          <Th>Image</Th>
          <Th>Username</Th>
          <Th isNumeric>Repositories</Th>
          <Th isNumeric>Followers</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>
            {loading ? <Spinner /> : (
              <Image
                boxSize='50px'
                objectFit='cover'
                src={value.avatar_url}
                alt={value?.login}
              />
            )}
          </Td>
          <Td>{loading ? (<Spinner />) : (
            <Link to={`/repos/${value?.login}`}>{value?.login}</Link>
          )}</Td>
          <Td isNumeric>{ loading ? (<Spinner />) : value?.public_repos}</Td>
          <Td isNumeric>{loading ? (<Spinner />) : value?.followers}</Td>
        </Tr>
      </Tbody>
      <Tfoot>
        <Tr>
          <Th>Image</Th>
          <Th>Username</Th>
          <Th isNumeric>Repositories</Th>
          <Th isNumeric>Followers</Th>
        </Tr>
      </Tfoot>
    </Table>
  )
}

export default SearchList
