import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = ({ tasks, setTasks }) => {
  const [taskName, setTaskName] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleAddTask = (e) => {
    e.preventDefault();
    if (taskName.trim() === "") return;

    const newTask = {
      id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
      name: taskName.trim(),
    };

    setTasks([...tasks, newTask]);
    setTaskName("");
  };

  const handleDelete = (id) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  };

  const handleEdit = (id) => {
    navigate("/edit/" + id);
  };

  // Filter tasks based on search term (case insensitive)
  const filteredTasks = tasks.filter((task) =>
    task.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 p-3 md:p-6">
      

      <h1 className="text-3xl font-bold mb-6 text-gray-800">Create Task</h1>
      <button
        onClick={() => navigate("/")}
        className="mb-4 bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
      >
        Back to Home
      </button>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search tasks..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border border-gray-300 rounded px-4 py-2 ml-1 md:ml-4 mb-6 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <form onSubmit={handleAddTask} className="mb-8 flex gap-4 items-center max-w-md">
        <input
          type="text"
          placeholder="Enter task name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 flex-grow focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700"
        >
          Add Task
        </button>
      </form>

      <table className="min-w-full  bg-white shadow rounded">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-3 px-6 text-left">S.No</th>
            <th className="py-3 px-6 text-left">Task Name</th>
            <th className="py-3 px-6">Edit</th>
            <th className="py-3 px-6">Delete</th>
          </tr>
        </thead>
        <tbody>
          {filteredTasks.length === 0 ? (
            <tr>
              <td colSpan="4" className="text-center py-4 text-gray-500">
                No tasks found
              </td>
            </tr>
          ) : (
            filteredTasks.map((task, index) => (
              <tr
                key={task.id}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-3 px-6">{index + 1}</td>
                <td className="py-3 px-6">{task.name}</td>
                <td className="py-3 px-6 text-center">
                  <button
                    onClick={() => handleEdit(task.id)}
                    className="text-white w-15 px-2 py-1 bg-blue-500 "
                  >
                    Edit
                  </button>
                </td>
                <td className="py-3 px-6 text-center">
                  <button
                    onClick={() => handleDelete(task.id)}
                    className="text-white w-15 bg-red-600 p-1"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Create;