import Controller from "./Controller/Controller";
import Admin from "./View/pages/Admin/Admin";
import { useState } from "react";
import { Route } from "react-router-dom";
function App() {
  const [admin, setAdmin] = useState(false);
  return (
    <div className="App">
      <Controller />
    </div>
  );
}

export default App;
