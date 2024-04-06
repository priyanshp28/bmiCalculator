import logo from './logo.svg';
import Navbar from './components/Navbar';
import About from './components/About';
import Calculator from './components/Calculator';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <div className="container my-3">
<Routes>
      <Route path="/" element={<Calculator/>} />
    <Route path="About/" element={<About/>} />
</Routes>
       
      </div>

</Router>
    </>
  );
}

export default App;
