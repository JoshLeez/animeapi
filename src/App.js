import "./App.css";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Details from "./Component/Details";
import Detailing from "./Component/Detailing";
import About from "./Component/About";
import Contact from "./Component/Contact"

function App() {
 
  return (
    <>
      <Router> 
      <Navbar/>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/details/:string/:id' element={<Details/>}/>
      <Route path='/detailing/:string/:id' element={<Detailing/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
