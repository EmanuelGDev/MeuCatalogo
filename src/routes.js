import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Watch from "./pages/Watch";
import Criador from "./pages/Criador";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> }></Route>
        <Route path="/watch" element={ <Watch /> }></Route>
        <Route path="/criador" element={ <Criador /> }></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes