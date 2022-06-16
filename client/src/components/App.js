import React from 'react'
import Home from './Home'
import PlanningRoom from './PlanningRoom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import useLocalStorage from '../hooks/useLocalStorage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/planning/:roomId' element={<PlanningRoom/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
