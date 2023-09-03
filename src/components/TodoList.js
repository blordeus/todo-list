import React from 'react';
import {ListItem} from "./ListItem";
import "./TodoList.css"

export const TodoList = ({todos, removeTodo}) => {
  return (
    <div className='todo-list'>
      {
        todos.map((todo, idx) => {
            return <ListItem text={todo} key={idx} removeTodo={() => removeTodo(idx)}/>
        })
      }
    </div>
  )
}
