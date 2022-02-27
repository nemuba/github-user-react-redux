import React from 'react'
import { useDispatch } from 'react-redux'
import {Button, Box, FormControl, FormLabel, Input, FormHelperText} from '@chakra-ui/react'
import { useForm } from "react-hook-form"
import { add_todo, remove_todo } from '../../store/reducers/todo'
import TodoList from './TodoList'

export default function Todo() {
  const dispatch = useDispatch()
  const { register, handleSubmit, formState: { errors } } = useForm()
  const onSubmit = data => {
    dispatch(add_todo(data))
  }

  return (
      <Box w="100%" p={3}>
        <Box w="100%" p={3}>
          <TodoList />
        </Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl>
            <FormLabel htmlFor='id'>ID</FormLabel>
            <Input id='id' type='text' {...register("id", { required: true, maxLength: 20 })} />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor='text'>Text</FormLabel>
            <Input id='text' type='text' {...register("text", { required: true, maxLength: 20 })} />
            <FormHelperText>Teste</FormHelperText>
          </FormControl>

          <Button type="submit">Add</Button>
        </form>
    </Box>
  )
}
