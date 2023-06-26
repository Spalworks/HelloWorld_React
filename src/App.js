// eslint-disable-next-line

import './App.css';
import logo from './bridgelabz_logo.jpg'
import {useState} from "react";

function App() {
    let company = "Bridgelabz";
    const [name, setName] = useState("");


    const handleClick = (event)=>{
        console.log("Clicked")
        window.open("https://www.bridgelabz.com")
    }

    const handleInputChange= (event)=> {
        setName(event.target.value)
    }
  return (
    <div>
        <img src={logo} alt="" onClick={handleClick}/>
        <h1>Hello {name} ! Welcome to {company}</h1>
        <input type="text" placeholder="Enter your Name" onChange={handleInputChange}/>
    </div>
  );
}

export default App;
