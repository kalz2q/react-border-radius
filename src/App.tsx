import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    document.title = "react-border-radius"
  })
  return (
    <div className="App">
      <p>Hello<br></br>New Me</p>
      <div className="circle-1"></div>
      <div className="circle-2"></div>
      <div className="circle-3"></div>
    </div>
  );
}

export default App;
