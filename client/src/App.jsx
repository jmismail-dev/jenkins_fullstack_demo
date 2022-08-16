import { useState, useEffect } from 'react';
import axios from 'axios';
// import logo from './logo.svg'
import './App.css'

function App() {
  const [state, setState] = useState(0);
  useEffect(() => {
    axios.get('/api').then((res) => {
      setState(res.data)
    });
  }, [])

  return (
    <div className='App'>
      <h1>Hello, world</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
      {JSON.stringify(state)}
    </div>
  )
}

export default App
