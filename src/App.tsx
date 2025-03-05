import "./output.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Tasks from "./pages/Tasks";

function App() {
  return (
    <Router>
      <div className="flex h-screen flex-col">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/tasks" element={<Tasks />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
