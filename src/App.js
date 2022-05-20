import Controller from "./Controller/Controller";
import Admin from "./View/Admin/Admin";
import { useState } from "react";
import { Route } from "react-router-dom";
function App() {
  const [admin, setAdmin] = useState(false);
  return (
    <div className="App">
      {admin === true ? (
        <Admin setAdmin={setAdmin} />
      ) : (
        <Controller setAdmin={setAdmin} />
      )}
    </div>
  );
}

export default App;
