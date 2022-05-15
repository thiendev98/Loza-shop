import Controller from "./Controller/Controller";
import Admin from "./View/pages/Admin/Admin";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
function App() {
  const [admin, setAdmin] = useState(false);
  return (
    <div className="App">
      {admin === false && <Controller setAdmin={setAdmin} />}
      {admin === true && <Admin />}
    </div>
  );
}

export default App;
