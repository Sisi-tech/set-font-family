import React, { useState } from "react";
// import ReactDOM from "react-dom";

const App = () => {
  const [family, setFamily ] = useState("Verdana");
  return (
    <div>
      <h1>Web-Safe Font Families</h1>
      <label for="selector">These are the common, web-safe font families of the internet:</label>
      <select id="selector" value={family} onChange={(e)=>{ setFamily(e.target.value)}}>
        <option value="Arial">Arial</option>
        <option value="Verdana">Verdana</option>
        <option value="Helvetica">Helvetica</option>
        <option value="Tahoma">Tahoma</option>
        <option value="Times New Roman">Times New Roman</option>
        <option value="Georgia">Georgia</option>
        <option value="Brush Script MT">Brush Script MT</option>
      </select>
      <h3>Sample Text:</h3>
      <p style={{fontFamily:family}}>Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma  which is living with the results of other people's thinking. -Steve Jobs</p>
    </div>
  )
 }


export default App;
