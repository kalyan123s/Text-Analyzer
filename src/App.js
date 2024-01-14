// import logo from "./logo.svg";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/textform";
import React, { useState } from 'react'
// import useLocalStorage from "use-local-storage";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode]=useState('light')
  const [alert, setAlert]=useState(null)

  const ShowAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },2000)
  }
  const handleDarkMode=()=>{
    if(mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor='white';
      document.body.style.color='#070707';
      ShowAlert("Light Mode has been enabled!","success");
    }
    else{
      setMode('dark')
      document.body.style.backgroundColor='#070707';
      document.body.style.color='white';
      ShowAlert("Dark Mode has been enabled!","success")
    }
  }
  return (
    <>
      <Navbar title="Texts Analyzer" aboutText="About" mode={mode}  toggleDark={handleDarkMode}/>
      {/* <Navbar /> */}
      <Alert alert={alert}/>
      <TextForm heading="Enter Texts to Analyze." enteredTexts="" mode={mode}/>
       {/* <About/> */}
     </>
  );
}

export default App;
