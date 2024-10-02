import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';

/* Pages */
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Hobbies from "./pages/Hobbies";
import Training from "./pages/Training";
import Projects from "./pages/Projects";
import Contato from "./pages/Contato.jsx"

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/skills" element={<Skills/>}/>
          <Route path="/hobbies" element={<Hobbies/>}/>
          <Route path="/training" element={<Training/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/contato" element={<Contato/>}/>
        </Routes>
      </Router>
    
    </>
  );
}

export default App;
