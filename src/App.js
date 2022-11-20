// import logo from "./logo.svg";
// import axios from "axios";
// import { Component } from "react";


import Home from "./page/Home";

import "./App.css";
import Navbar from "./Navbar";
import { Route,Routes } from "react-router-dom"
// import { senddata } from "./Features/Components/Home";
// import { HomeSceen } from "./Features/Components/Home";

// import { getData } from "../src/Features/Components/Home/index"

// import StudentPaGe from "./page/STUPA";
// import FlagApp from "./Features/Components/table/tables";
import Class from "./page/classs";

function App() {
  var touchScroll = function( event ) {
    event.preventDefault();
};
document.body.addEventListener('touchstart', function(e){e.preventDefault();
});
 
  return (
    <>
      <div id='content'>
      <Navbar />
      <div className="container">
      <Routes>
      
        <Route path="/" element = {<Home />} />
        {/* <Route path="/student" element = {<StudentPaGe />} /> */}
        {/* <Route path="/Anal" element = {<AnalPaGe />} render={() => <AnalPaGe dataD={senddata} />} /> */}
        {/* <Route path="/Anal" element = {<AnalPaGe />} /> */}
        <Route path="/class" element = {<Class />} />
        {/* <Route path="/person" element = {<Person />} /> */}
        {/* <Route path="/person" element = {<Person />} /> */}
      </Routes>
   
      </div>
      {/* <FlagApp/> */}
      </div>
    </>
  );
}

export default App;
