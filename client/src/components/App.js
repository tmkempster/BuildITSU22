import React from 'react'
import Home from './Home'
import PlanningRoom from './PlanningRoom';
import io from "socket.io-client";

const socket = io.connect("http://localhost:9081")

function App() {
  
  return (
      <Home />
  );
}

export default App;
