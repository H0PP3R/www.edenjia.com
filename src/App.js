import { Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

import "./App.css";
import INFO from "./data/user";
import Home from "./pages/Home.jsx";

import "@theme-toggles/react/css/Lightbulb.css";

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta name="description" content={INFO.main.helmet} />
        <title>Eden Jia</title>
      </Helmet>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
