import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import axios from 'axios';
import NavBar from "./components/NavBar"
import Home from './components/Home'
import Artist from './components/Artist'
import About from './components/About'
import Contact from './components/Contact'
axios.defaults.baseURL="http://localhost:8000/api"


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/' element={<About/>}/>
          <Route path='/' element={<Artist/>}/>
          <Route path='/' element={<Contact/>}/>          
        </Routes>
      </Router>
    </div>
  );
}

export default App;