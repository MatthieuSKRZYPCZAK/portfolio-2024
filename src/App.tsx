import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";

function App() {


  return (
    <BrowserRouter>
      
      <Header />
      <Routes>
        <Route 
            path='/' 
            element={
              <>
              <Home />
              <About />
            </> 
          } 
      />
      </Routes>
    </BrowserRouter>
  )
}

export default App
