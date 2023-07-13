import Home from "./componentes/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./componentes/register/Login";


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
        
          <Route />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
