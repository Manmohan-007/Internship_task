import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainPage from "./container/mainPage" 
import TopBar from "./components/LeftSide/TopBar"
import RightSide from  "./components/RightSide/RightSide"
function App() {
  return (
   <div> 
   <div className="Wrapper Container">
   <TopBar/> 
   <RightSide/>
   </div> 
   </div>  
  );
}

export default App;
