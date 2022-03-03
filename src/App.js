
import './App.css';
import './App.scss';
import React, { useState } from 'react';
import Lab from './Lab';
export default function App() {

  const [names,setnames] = useState("")
  const [placeholders,setplaceholders] = useState("Enter your name")

  return (
    <div>
     <Lab name = {names} placeholder = {placeholders}/>
    </div>

  )

}

