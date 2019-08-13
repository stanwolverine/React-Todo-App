import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import './TodoList.css';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.remove = this.remove.bind(this);
    this.update = this.update.bind(this);
    this.create = this.create.bind(this);
    this.toggleCompletion = this.toggleCompletion.bind(this);
    this.state = {
      todos: []
    };
  }
  update(id, updatedTask) {
    const updatedTodos = this.state.todos.map(todoData => {
      if (todoData.id === id) {
        let newTodoData = { ...todoData, task: updatedTask };
        return newTodoData;
      }
      return todoData;
    });
    this.setState({
      todos: updatedTodos
    });
  }
  remove(id) {
    const newTodos = this.state.todos.filter(todoData => todoData.id !== id);
    this.setState({
      todos: newTodos
    });
  }
  create(newTodo) {
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  }
  toggleCompletion(id) {
    const updatedTodos = this.state.todos.map(todoData => {
      if (todoData.id === id) {
        let newTodoData = { ...todoData, completed: !todoData.completed };
        return newTodoData;
      }
      return todoData;
    });
    this.setState({
      todos: updatedTodos
    });
  }
  render() {
    const todoList = this.state.todos.map(todo => (
      <Todo
        task={todo.task}
        key={todo.id}
        id={todo.id}
        completed={todo.completed}
        removeTodo={this.remove}
        updateTodo={this.update}
        toggleTodo={this.toggleCompletion}
      />
    ));
    return (
      <div className='TodoList'>
        <h1>
          Todo List!<span>A Simple React Todo List App</span>
        </h1>
        <ul>{todoList}</ul>
        <NewTodoForm createTodo={this.create} />
      </div>
    );
  }
}

export default TodoList;
