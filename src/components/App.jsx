
import React, { Component } from "react";
import Counter from "./Counter";
import Dropdown from "./Dropdown";
import ColorPicker from "./ColorPicker";
// import TodoListTest from './TodoList';
import TodoList from './TodoList';
import TodoEditor from "./TodoEditor";
import Filter from "./Filter";
// import todos from './todos.json';
import initialTodos from '../todos.json';
import Container from "./Container";
import FormTest from "./FormTest";
import { nanoid } from "nanoid";  //  npm i nanoid
//   model.id = nanoid() //=> "V1StGXR8_Z5jdHi6B-myT"
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
    filter: '',
  };
  addTodo = text => {
    const todo = {
      id: nanoid(),
      text,
      completed: false,
    };
    this.setState(({todos}) => ({
      todos: [todo, ...todos],
    }));
  };
  deleteTodo = (todoId) => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId)
    }))
  }

  toggleCompleted = todoId => {
    // this.setState(prevState => ({
    //   todos: prevState.todos.map(todo => {
    //     if (todo.id === todoId) {
    //       return {
    //         ...todo,
    //         completed: !todo.completed,
    //       };
    //     }

    //     return todo;
    //   }),
    // }));

    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
      ),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleTodos = () => {
    const { filter, todos } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter),
    );
  };

  calculateCompletedTodos = () => {
    const { todos } = this.state;

    return todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0,
    );
  };

  // formSubmitHandler = data => {
  //   console.log(data);
  // }
  formSubmitHandler = data => {
    setTimeout(() => {console.log(data)}, 1000);
  }

  render() {
    const {todos, filter} = this.state;
    const totalTodoCount = todos.length;
    // const completedTodoCount = todos.reduce((acc, todo) => (
    //   todo.completed ? acc +1 : acc ),
    //    0,);
    const completedTodoCount = this.calculateCompletedTodos();
    const visibleTodos = this.getVisibleTodos();
    return ( 
<div className="app__container">
 <h1 className="app__title">component state</h1>
 
   <Container>
    <p style={{fontWeight: 700, fontSize: '24px',}}>Dropdown</p>
     <Dropdown className="app__dropdown"/>
   </Container>
    <Container>
      <p style={{fontWeight: 700, fontSize: '24px',}}>Counter</p>
      <Counter className="app-counter" initialValue={10}
      />
    </Container>
    <Container>
      <p style={{fontWeight: 700, fontSize: '24px',}}>ColorPicker</p>
      <ColorPicker className="app-color-picker" options={colorPickerOptions} />
    </Container>

    {/* <Container>
      <p 
      style={{fontWeight: 700, fontSize: '24px',}}>TodoList</p>
    <p>total TODO: {totalTodoCount}</p>
  <p>number of completed TODO: {completedTodoCount}</p> */}
      {/* <TodoList todos={todos} onDeleteTodo={this.deleteTodo}/> */}
      {/* <TodoListTest
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />


        ===========================================================

    </Container> */}
    <Container>
    <div>
       {/* TODO: вынести в отдельный компонент */}
          <p>Всего заметок: {totalTodoCount}</p>
          <p>Выполнено: {completedTodoCount}</p>
        </div>

        <TodoEditor onSubmit={this.addTodo} />

        <Filter value={filter} onChange={this.changeFilter} />

        <TodoList
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />
    </Container>
 
      <Container>
        <p style={{fontWeight: 700, fontSize: '24px',}}>Form</p>
        <FormTest onSubmitAction = {this.formSubmitHandler} />
      </Container>
      
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
