import './App.css';
import Navbar from './components/Navbar';
import About from './components/about';
import TextForm from './components/textForm';
import React,{useState} from 'react'
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";

function App() {
  const[mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);
  const showAlert=(Title,message,Type)=>{
    setAlert({
      title:Title,
      description:message,
      type:Type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("mode Changed","Dark has been enabled","success");
      document.title = "TextUtils - Dark Mode";
      // setInterval(() => {
      //   document.title = "TextUtils  is Amazing";
      // }, 2000);
      // setInterval(() => {
      //     document.title = "Install TextUtils";
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Mode Changed","Light has been enabled","primary");
      document.title = "TextUtils - Dark Mode";
    }
  }

  return (
  
  <Router>
    <Navbar title="textUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert} />
    <Routes>
      <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter your text below to analyze" mode={mode} />}></Route>
      <Route exact path="/about" element={<About/>}></Route>
    </Routes>
  </Router>
  );
}

export default App;
