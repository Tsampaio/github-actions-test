import React, { useEffect, useState} from 'react';
import axios from 'axios'
import './App.css';

function App() {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const name = axios.get('/names');

    setUsername(name)
  }, [])

  return (
    <div className="App">
      <h1>My name is {username}</h1>
    </div>
  );
}

export default App;
