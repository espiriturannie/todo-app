import React from 'react';

function TodoItem({ task, index, completeTask, deleteTask }) {
  const handleComplete = () => {
    completeTask(index);
  };

  const handleDelete = () => {
    deleteTask(index);
  };

  return (
    <li>
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.task}
      </span>
      {!task.completed && (
        <button onClick={handleComplete}>Complete</button>
      )}
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default TodoItem;
