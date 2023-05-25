import React, { useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import './App.css';
import {Helmet} from "react-helmet";
import Favicon from "react-favicon";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, { task: newTask, completed: false }]);
  };

  const completeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = true;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <Favicon url="https://static.vecteezy.com/system/resources/previews/014/204/115/original/digital-sticky-notes-cute-paper-png.png" />
      <Helmet>
        <title>My Todo List</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <h1>Todo List 📝 </h1>
      <TodoForm addTask={addTask} />
      <TodoList tasks={tasks} completeTask={completeTask} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
