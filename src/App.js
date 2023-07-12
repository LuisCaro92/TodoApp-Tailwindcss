import Home from "./componentes/Home";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Register from "./componentes/register/Register";

const App =() => {
  return(
    <div>
      <BrowserRouter>
      <Routes>
        <Route path ="/" element = { <Home/>}/>
        <Route path ="/login" element = { <Register/> }/>
        <Route/>
      </Routes>
      </BrowserRouter>
   
    </div>

  )
}

export default App;