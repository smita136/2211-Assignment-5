import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import Navbar from './components/Navbar';
import Home from './components/Home';
import Register from './components/Register';
import Update from './components/Update';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';


function App() {
  return (
    <>
      <Navbar />
      <Routes basename={process.env.PUBLIC_URL}>
        <Route path='/' element={<Home />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/update/:id' element={<Update />}/>

      </Routes>

    </>
  );
}

export default App;
