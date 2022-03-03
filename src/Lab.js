
import React, { useState, useEffect } from "react";
import './App.scss';
  
export default function Lab({placeholder,name}) {

  const [darkTheme, setDarkTheme] = useState(false);
  const [names,setnames] = useState(name)
  const [placeholders,setplaceholders] = useState(placeholder)


  useEffect(() => {
    const root = document.documentElement;

    root?.style.setProperty("--background-color",darkTheme ? "#262833" : "#fff");
    root?.style.setProperty("--text-color", darkTheme ? "#fff" : "#262833");
    root?.style.setProperty("--margin-top", darkTheme ? "10px" : "10px");
    root?.style.setProperty("--border-bottom", darkTheme ? "1px solid" : "1px solid");
    root?.style.setProperty("--font-sizetext", darkTheme ? "1rem" : "1rem");
    root?.style.setProperty("--font-sizeinput", darkTheme ? "14px" : "14px");

  }, [darkTheme]);

  const changetext = (e) => {
    setnames(e.target.value);
   }
  

  return (
    <>
      <div className="card">
        <div>
        <div>
        <label className="textlabel"> Enter your name:
        </label>
        </div>
        <div>
        <input className="textinput" type="text" autoFocus = {false} placeholder = {placeholders} 
        value = {names} onChange={(e) => {changetext(e)}}/>
        </div>
        </div>
  
          <button onClick={() => setDarkTheme(!darkTheme)}>
            {darkTheme ? "Light" : "Dark"}
          </button>
      </div>
    </>
  );
}
