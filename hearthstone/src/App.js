import React, { useState, useEffect } from 'react'
import './App.css';

function App() {
  const hearth = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'e89b1384b7msh1ee735c6ea1f437p130246jsnf3526df51361',
      'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
    }
  } 

  //const [card, setCard] = useState()
  //const [type, setType] = useState()
  //const [class, setClass] = useState()
  //const [race, setRace] = useState()
  //const [set, setSet] = useState()
  //const [seach, setSearch] = useState()

  useEffect((card, ) => {
    fetch('https://omgvamp-hearthstone-v1.p.rapidapi.com/info', hearth)
      .then(r => r.json())
      .then(data => console.log(data))
  }, [])

  return (
    <div className="App">
      {console.log('app rendering')}
      <header className="App-header">
        <h1>Header</h1>
      </header>
    </div>
  );
}

export default App;
