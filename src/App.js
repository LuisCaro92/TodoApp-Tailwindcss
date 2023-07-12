import Home from "./componentes/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Register from "./componentes/register/Register";
import Login from "./componentes/register/Login";
import Loginup from "./componentes/register/Login-up";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/loginup" element={< Loginup/>} />
          <Route />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
