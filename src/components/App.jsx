
import React, { Component } from "react";
import Counter from "./Counter";
import Dropdown from "./Dropdown";
import ColorPicker from "./ColorPicker";
import TodoList from './TodoList';
// import todos from './todos.json';
import initialTodos from '../todos.json';

import './App.css';

const colorPickerOptions = [
  { label: 'red', color: '#f44336'},
  { label: 'green', color: '#4CAF50'},
  { label: 'blue', color: '#2196F3'},
  { label: 'grey', color: '#607D8B'},
  { label: 'pink', color: '#E91E63'},
  { label: 'indigo', color: '#3F51B5'},
];

class App extends Component {
  state = {
    // todos,
    todos: initialTodos,
  };

  deleteTodo = (todoId) => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId)
    }))
  }

  render() {
    const {todos} = this.state;
    const totalTodoCount = todos.length;

    const completedTodoCount = todos.reduce((acc, todo) => (
      todo.completed ? acc +1 : acc ),
       0,);
    return ( 
<div className="app__container">
 
 <h1 className="app__title">component state</h1>
 <div className="app__content">
   <Dropdown className="app__dropdown"/>
    <Counter className="app-counter" initialValue={10}
    />
    <ColorPicker className="app-color-picker" options={colorPickerOptions} />

<div>
  <p>total TODO: {totalTodoCount}</p>
  <p>number of completed TODO: {completedTodoCount}</p>
</div>

    <TodoList todos={todos} onDeleteTodo={this.deleteTodo}/>
 </div>
</div>
    );
  }
}

export default App;

// ==========================================================

// export const App = () => {
//   return (<div className="app__container">
 
//    <h1 className="app__title">component state</h1>
//    <div className="app__content">
//      <Dropdown className="app__dropdown"/>
//       <Counter className="app-counter" initialValue={10}
//       />
//       <ColorPicker className="app-color-picker" options={colorPickerOptions} />
//    </div>
//   </div>);
  
// };
