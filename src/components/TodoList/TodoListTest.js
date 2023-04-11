import React from 'react';
import './TodoListTest.css';

// const TodoList = ({todos}) => <ul>{todos.map(todo =>
const TodoList = ({ todos, onDeleteTodo }) => (
  <ul className='todo__list'>
    {todos.map(({ id, text }) => (
      <li key={id} className='todo__item'>
        <p>{text}</p>
        <button type='button' onClick={()=>onDeleteTodo(id)}>delete</button>
      </li>
    ))}
  </ul>
);

export default TodoList;
