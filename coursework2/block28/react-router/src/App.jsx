import "./App.css";
import { Routes, Route} from "react-router-dom";
import Red from "./components/red";
import Blue from "./components/blue";
import Home from "./components/Home";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <div id="container">
        <Navigation />

        <div id="main-section">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blue" element={<Blue />} />
          <Route path="/red" element={<Red />} />
        </Routes>
      </div>
      
      </div>

     
    </>
  );
}

export default App;
