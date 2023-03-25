import './App.css';
import React, {useState} from 'react'
import axios from 'axios';


function App() {

  // API call for random quotes
  const getQuote = () => {
    axios.get('https://api.quotable.io/random')
    .then((response) => {
    console.log(response.data.content);
    console.log(response.data.author);
})
    .catch((error) => {
    console.log(error);
})
}


  return (
    <div className="App">

      <button onClick={getQuote}>Get Quote</button>

  
    </div>
  );
}

export default App;
