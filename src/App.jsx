import { Routes, Route } from "react-router-dom";
import { Home } from './components/Home/Home';
import { Skills } from "./components/Skills/Skills";
import { About } from "./components/About/About";
import { Works } from "./components/Works/Works";

import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css'



function App() {
  return (
    <div >
      <div className="App">
          <Routes>
            <Route  path="/" element={<Home />} />
            <Route path='/about' element={<About/>}/>
            <Route path='/skills' element={<Skills/>}/>
            <Route  path="/works" element={<Works/>}/>
            <Route  path="*" element={<Home/>}/>
          </Routes>
      </div>
    </div>
  );
}

export default App;
