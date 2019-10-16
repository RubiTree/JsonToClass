import '../node_modules/reflect-metadata/Reflect.js'
import 'reflect-metadata'
import React from 'react';
import logo from './logo.svg';
import './App.css';
import { User } from './User';
import { plainToClass } from "class-transformer";


const App: React.FC = () => {

  React.useEffect(() => {
    const testJson = JSON.stringify(new User(2,'hello','world'))
    const result = plainToClass(User, testJson)

    // ERROR RESULT!  result.id:undefined result.firstName:undefined result.lastName:undefined
    console.log(`result.id:${result.id} result.firstName:${result.firstName} result.lastName:${result.lastName}`)
  },[])


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
