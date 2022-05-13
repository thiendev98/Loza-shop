import Controller from "./Controller/Controller";
import Admin from "./View/pages/Admin/Admin";
import { useState } from "react";
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
