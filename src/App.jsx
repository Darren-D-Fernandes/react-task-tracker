import { useState } from "react";
import TaskForm from "./components/TaskForm.jsx";
import TaskList from "./components/TaskList.jsx";

import TaskSummary from "./components/TaskSummary.jsx";


const starterTasks = [
  { id: crypto.randomUUID(), title: "Read the Module 2 lesson", completed: false , priority: "High" },
  { id: crypto.randomUUID(), title: "Create a React component", completed: true, priority: "Medium" },
  { id: crypto.randomUUID(), title: "Practice events", completed: false, priority: "Low" }
];

export default function App() {
  const [tasks, setTasks] = useState(starterTasks);

  const [filter,setFilter] = useState("All");

  function addTask(title) {
    setTasks((currentTasks) => [
      ...currentTasks,
      { id: crypto.randomUUID(), title, completed: false, priority: "Medium" },//Adding priority to default to Medium
    ]);
  }

  function toggleTask(taskId) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task,
      ),
    );
  }

  function deleteTask(taskId) {
    setTasks((currentTasks) => currentTasks.filter((task) => task.id !== taskId));
  }

  const activeCount = tasks.filter((task) => !task.completed).length;
  const completedCount = tasks.length - activeCount;
  //calculating active or completed tasks
  const filteredTasks = tasks.filter((task) =>{
    if (filter === "Active") return !task.completed;
    if (filter === "Completed") return task.completed;
    return true; //If filter is "All"
  })

  return (
    <main className="app-shell">
      <section className="app-card" aria-labelledby="page-title">
        <header className="app-header">
          <p className="eyebrow">INEW-2434 | Module 2</p>
          <h1 id="page-title">Homework Task Tracker</h1>
          <p>Practice components, props, state, events, forms, and lists.</p>
        </header>

        <TaskForm onAddTask={addTask} />

        <TaskSummary
          activeCount={activeCount}
          completedCount={completedCount}
          totalCount={tasks.length}
        />
        <div className="filter-buttons" >
          <button className={filter === "All" ? "active-filter" : ""}
            onClick={()=> setFilter("All")}
          >All</button>

          <button className={filter === "Active" ? "active-filter" : ""}
            onClick={()=> setFilter("Active")}
          >Active</button>

          <button className={filter === "Completed" ? "active-filter" : ""}
            onClick={()=> setFilter("Completed")}
          >Completed</button>
        </div>

        <TaskList tasks={filteredTasks} onToggleTask={toggleTask} onDeleteTask={deleteTask} />
      </section>
    </main>
  );
}
