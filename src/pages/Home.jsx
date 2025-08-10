import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleCreate = () => {
    navigate("/create");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <h1 className=" text-3xl md:text-4xl font-bold mb-8 text-gray-800">Task Management App</h1>
      
      <button
        onClick={handleCreate}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded shadow"
      >
        Create Task
      </button>
    </div>
  );
};

export default Home;