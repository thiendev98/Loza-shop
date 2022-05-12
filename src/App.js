import Controller from "./Controller/Controller";
import Admin from "./View/pages/Admin/Admin";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Controller />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
