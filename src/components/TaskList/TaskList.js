import React, { useState } from 'react';
import './TaskList.css';

export default function TaskList() {
  const [tasks, setTasks] = useState(["Walk dog","Write code","Read docs"]);
  const [newTask, setNewTask] = useState("");

  const addTask = e => {
    e.preventDefault();
    const t = newTask.trim();
    if (!t) return;
    setTasks([...tasks, t]);
    setNewTask("");
  };

  const removeTask = idx => {
    setTasks(tasks.filter((_, i) => i !== idx));
  };

  return (
    <div className="task-list">
      <h2>My Tasks</h2>
      <form onSubmit={addTask} className="task-form">
        <input
          type="text"
          placeholder="New task…"
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <ul className="tasks">
        {tasks.length === 0
          ? <li className="empty">No tasks yet!</li>
          : tasks.map((task,i)=>(
              <li key={i}>
                {task}
                <button className="remove-btn" onClick={()=>removeTask(i)}>×</button>
              </li>
            ))
        }
      </ul>
    </div>
  );
}
