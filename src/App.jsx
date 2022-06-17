import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './components/Home/Home';

import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <div >
      <div className="App">
      <BrowserRouter>
          <Routes>
            <Route  path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
