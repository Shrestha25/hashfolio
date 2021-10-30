import React from 'react';
import './App.css';
import List from './Component/list';
import Login from './Component/login';

function App() {
  return (
    <div className="App">
      {localStorage.getItem("username")? <List/>:
       <Login/>}
    </div>
  );
}

export default App;
