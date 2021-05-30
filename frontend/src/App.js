import React, { useEffect, useState} from 'react';
import axios from 'axios'
import './App.css';

function App() {
  const [username, setUsername] = useState('');

  useEffect(() => {
    getNames();
  }, []);

  const getNames = async () => {
    const response = await axios.get('/names');
    console.log(response)
    setUsername(response.data)
  }

  return (
    <div className="App">
      <h1>My name is {username}</h1>
    </div>
  );
}

export default App;
