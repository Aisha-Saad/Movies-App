import "./App.css";
import Home from "./pages/Home";
import Fivoretes from "./pages/Fivoretes";
import { Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";

function App() {
  return (
    <>
    <Navbar/>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Fivoretes" element={< Fivoretes/>} />
        </Routes>
      </main>
    </>
  );
}

export default App;
