import { useState } from "react";

export default function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const cleanTitle = title.trim();

    if (!cleanTitle) {
      setError("Please enter a task title.");
      return;
    }

    onAddTask(cleanTitle);
    setTitle("");
    setError("");
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <label htmlFor="task-title">New task</label>
      <div className="form-row">
        <input
          id="task-title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Example: Practice props"
          aria-describedby={error ? "task-error" : undefined}
        />
        <button type="submit">Add task</button>
      </div>
      {error && <p id="task-error" className="form-error" role="alert">{error}</p>}
    </form>
  );
}
