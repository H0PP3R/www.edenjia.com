import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.jsx";

import "@theme-toggles/react/css/Lightbulb.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
