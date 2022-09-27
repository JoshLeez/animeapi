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

function App() {

  return (
    <>
      <Router> 
      <Navbar />
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path='/details/:id' element={<Details/>}/>
      <Route path='/detailing/:id' element={<Detailing/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
