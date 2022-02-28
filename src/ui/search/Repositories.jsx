import { Box, Heading, Table, Tr, Td, Th, Thead, Tbody, Spinner, useToast } from '@chakra-ui/react'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchReposUserByName } from '../../store/reducers/users'
import { hasPresent } from '../../services/functions'

function Repositories(){
  const toast = useToast()
  const { username } = useParams()
  const dispatch = useDispatch()
  const { repositories, loading, error, value } = useSelector(state => state.user)

  useEffect(() => {
    dispatch(fetchReposUserByName(username))
  }, [username])

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

  return(
    <Box w="100%" p={3}>
      <Heading>Repositories</Heading>
      <Link to={`/`}>Back to {value?.login}</Link>
      <Table variant='simple'>
      <Thead>
        <Tr>
          <Th>Username</Th>
          <Th>Name</Th>
          <Th>Private</Th>
        </Tr>
      </Thead>
      <Tbody>
        {loading && (
          <Tr>
            <Td colSpan="3" textAlign={'center'}>
              <Spinner />
            </Td>
          </Tr>
        )}
        { hasPresent(repositories) && repositories.map(repo => (
          <Tr key={repo.id}>
            <Td>{repo.owner.login}</Td>
            <Td>{repo.name}</Td>
            <Td>{repo.private ? 'Yes' : 'No'}</Td>
          </Tr>
        ))}

        {!loading && !hasPresent(repositories) && (
          <Tr>
            <Td colSpan="3" textAlign={'center'}>
              No repositories found
            </Td>
          </Tr>
        )}
      </Tbody>
      </Table>
    </Box>
  )
}

export default Repositories
