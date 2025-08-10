import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Edit from "./pages/Edit"; 

import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([{ id: 1, name: "Washing" }]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Pass tasks and setTasks as props */}
        <Route
          path="/create"
          element={<Create tasks={tasks} setTasks={setTasks} />}
        />
        <Route
          path="/edit/:id"
          element={<Edit tasks={tasks} setTasks={setTasks} />}
        />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;