import Home from "./componentes/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./componentes/register/Login";
import Navbar from "./componentes/Navbar";
import Profile from "./componentes/profile/Profile";


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Login />} />
          <Route path="/profile"  element={<Profile/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
