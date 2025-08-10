import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Edit = ({ tasks, setTasks }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find the task to edit based on id from params (convert to number)
  const taskToEdit = tasks.find((task) => task.id === Number(id));

  const [taskName, setTaskName] = useState("");

  useEffect(() => {
    if (taskToEdit) {
      setTaskName(taskToEdit.name);
    } else {
      // If task not found, navigate back to home or create page
      navigate("/");
    }
  }, [taskToEdit, navigate]);

  const handleUpdate = (e) => {
    e.preventDefault();
    if (taskName.trim() === "") return;

    // Update task in tasks array
    const updatedTasks = tasks.map((task) =>
      task.id === Number(id) ? { ...task, name: taskName.trim() } : task
    );

    setTasks(updatedTasks);

    // Navigate back after update
    navigate("/create");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Edit Task</h1>

      <form onSubmit={handleUpdate} className="flex flex-col gap-4 max-w-md">
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter task name"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
        >
          Update Task
        </button>
      </form>
    </div>
  );
};

export default Edit;