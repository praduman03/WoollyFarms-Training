import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Main from "./pages/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/main" element={<Main/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
