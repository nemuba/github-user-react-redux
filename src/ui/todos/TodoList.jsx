import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {UnorderedList, ListItem, Button} from '@chakra-ui/react';
import { remove_todo } from '../../store/reducers/todo';

export default function TodoList() {
  const todos = useSelector((state) => state.todos.value)
  const dispatch = useDispatch()

  const handleRemoveTodo = (id) => {
    dispatch(remove_todo({id}))
  }

  return(
    <UnorderedList>
      {todos.map((todo) => (
        <ListItem key={todo.id}>
          {`${todo.text}`}
          <Button 
            colorScheme="red"
            variant="outline"
            ml={3}
            onClick={() => handleRemoveTodo(todo.id)}
          >
            Remover
          </Button>
        </ListItem>
      ))}
    </UnorderedList>
  )
}
