import React, { Component } from 'react';

import TodoList from './components/Todoliste';
import AddTodo from './components/Addtodo';

import './App.css';

class App extends Component {

  render() {
    return (
      <div>
       
        <div className="container">
          <div className="to-do-container">
            <AddTodo className="search" />
            <div className="space-between"></div>
            <TodoList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;