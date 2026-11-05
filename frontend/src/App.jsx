import { useState , useEffect} from "react";
import TaskForm from "./components/TaskForm.jsx";
import TaskList from "./components/TaskList.jsx";

import TaskSummary from "./components/TaskSummary.jsx";



export default function App() {
  const [tasks, setTasks] = useState([]);

  const [filter,setFilter] = useState("All");

  //Track if the backend is down 
  const[serverError, setServerError] = useState("");
  const API_URL = "http://localhost:8080/api/tasks";

  //fetching all tasks when the component boots up
  useEffect(()=>{
    fetch(API_URL)
      .then((res)=>{
        if(!res.ok) throw new Error("Could not fetch tasks from server");
        return res.json();
      })
      .then((data) => {setTasks(data);
        setServerError("");
      })
      .catch((err) => console.error("Network Error:", err));
      setServerError("⚠️ The backend server is currently offline. Please start the spring boot application.")
  }, []);

  //Sending a post request
  function addTask(title) {
    fetch(API_URL, {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({title: title, priority: "Medium"}),
    })
    .then((res) =>{
      if(!res.ok) throw new Error("Failed to save task to backend");
      return res.json();
    })
    .then((savedTask)=>{
      //Adding the task returned by the backend
      setTasks((currentTasks)=> [...currentTasks, savedTask]);
    })
    .catch((err) => console.error("Create Error:", err));
  }

  //sending put request to toggle completion status
  function toggleTask(taskId) {
    fetch(`${API_URL}/${taskId}`,{
      method: "PUT",
    })
    .then((res)=>{
      if(!res.ok) throw new Error("Failed to update task status");
      return res.json();
    })
    .then((updatedTask)=>{
      setTasks((currentTasks)=>
        currentTasks.map((task)=> (task.id === taskId ? updatedTask : task))
      );
    })
    .catch((err)=> console.error("Update Error:", err));
  }

  //Sending a delete request
  function deleteTask(taskId) {
    fetch(`${API_URL}/${taskId}`,{
      method: "DELETE",
    })
    .then((res)=>{
      if(!res.ok) throw new Error("Failed to delete task from backend");
      //if backend confirms success then remove
      setTasks((currentTasks)=> currentTasks.filter((task)=>task.id !== taskId));
    })
    .catch((err) => console.error("Delete Error", err));
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

        {/* Conditional server offline alert banner */}
        {serverError &&(
          <div className="form-error" style={{padding: "10px",margin: "15px 0", textAlign:"center", borderRadius:"4px"}}>
            {serverError}
          </div>
        )}
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
