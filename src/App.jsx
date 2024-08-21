import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Create from "./Components/Create";
import Navbar from "./Components/Navbar";
import Edit from "./Components/Edit";
import Delete from "./Components/Delete";

function App() {
  const myWidth = 220;
  return (
    <div className="App">
      <Navbar
        drawerWidth={myWidth}
        content={
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/create" element={<Create />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="/delete/:id" element={<Delete />} />
          </Routes>
        }
      />
    </div>
  );
}

export default App;
