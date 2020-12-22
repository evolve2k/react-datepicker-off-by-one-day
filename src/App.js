import React, { useState } from "react";
import DatePicker from "react-datepicker";
import './App.css';
import "react-datepicker/dist/react-datepicker.css";

function App() {
  const [startDate, setStartDate] = useState('');
  return (
    <div className="App">
      <header className="App-header">
        <h1>react-datepicker Off By One Day Bug</h1>
        <a href="https://github.com/Hacker0x01/react-datepicker/issues/1018">
          <h2>Date Selected is One Day Off #1018</h2>
        </a>
        <p>Enter Date in Select Box Below</p>
        <DatePicker 
          type="datetime"
          selected={startDate} 
          onChange={date => setStartDate(date)} 
        />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
export default App;