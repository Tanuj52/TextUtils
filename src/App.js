
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1200);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#010c28';
      document.title = 'TextUtils - Dark mode';
      showAlert("Dark mode enabled", "success");
      //To change the title of the page at intervals
      // setInterval((() => {
      //   document.title = "Install TextUtils Now";
      // }), 5000);
      // setInterval((() => {
      //   document.title = "Developer - Tanuj";
      // }), 10000);

    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.title = 'TextUtils - Light mode';
      showAlert("Light mode enabled", "success")
    }
  };
  return (
    <>
      <Navbar title="TextUtils " mode={mode} toggleMode={toggleMode} />
      {/* Fixed Alert Container */}
      <div className="fixed-top mt-5 pt-3">
        <Alert alert={alert} />
      </div>
      <div className="container mt-5 pt-5">
        <TextForm showAlert={showAlert} heading="Enter text to analyse" mode={mode} />
      </div>
      {/* <Router>
        {/* <Navbar title="TextUtility " /> */}
      {/* <Navbar title="TextUtils " mode={mode} toggleMode={toggleMode} />
      {/* for default <Navbar /> */}
      {/* <Alert alert={alert} /> */}
      {/* <div className="container my-3">
        <Routes>
          {/* React always does partial matching 
            ex: path=/users--> compnent 1 
            path =/users/home/ --> component 2 but react will onlt see till users and render component 1 instead of component 2
            SO ALWAYS USE exact path="/..."   */}
      {/* <Route exact path="/about" element={<About />}></Route> */}
      {/* <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter text to analyse" mode={mode} />}></Route> */}
      {/* </Routes> */}

      {/* <TextForm showAlert={showAlert} heading="Enter text to analyse" mode={mode} /> */}
      {/* </div> */}
      {/* </Router > */}

    </>
  );
}

export default App;
