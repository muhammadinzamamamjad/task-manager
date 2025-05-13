import React, { useState, useEffect } from 'react';
import './TaskList.css';

export default function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch tasks once on mount
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch tasks');
        return res.json();
      })
      .then(data => {
        // Add a localComplete flag for UI-only toggling
        setTasks(data.map(task => ({ ...task, localComplete: false })));
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const toggleComplete = id => {
    setTasks(tasks.map(t =>
      t.id === id ? { ...t, localComplete: !t.localComplete } : t
    ));
  };

  if (loading) return <p className="loading">Loading tasks…</p>;
  if (error)   return <p className="error">Error: {error}</p>;

  return (
    <div className="task-list">
      <h2>My Tasks</h2>
      <ul className="tasks">
        {tasks.map(task => (
          <li
            key={task.id}
            className={task.localComplete ? 'completed' : ''}
          >
            <span className="title">{task.title}</span>
            <button
              className="complete-btn"
              onClick={() => toggleComplete(task.id)}
            >
              {task.localComplete ? 'Undo' : 'Complete'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
