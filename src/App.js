import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
<<<<<<< HEAD
import {Routes} from './react-router-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Detail from './components/Detail';
=======
import Detail from './components/Detail';
import Login from './components/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



>>>>>>> ec9a09f06d2a883f4a965d16b18b9c017a1eae23

function App() {
  return (
    <div className="App">
<<<<<<< HEAD

      <Router>
        <Header />
        <Routes>
          <Route path="/detail">
            <Detail />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Routes>
      </Router>
=======
    <Router>
      <Header />
      <Routes>
      <Route path='/detail' element={<Detail />} />
      
    
      <Route path="/" element={ <Home />} />

      <Route path="/login" element={ <Login />} />

   
      
      </Routes>
    </Router>
>>>>>>> ec9a09f06d2a883f4a965d16b18b9c017a1eae23
    </div>
  );
}

export default App;
