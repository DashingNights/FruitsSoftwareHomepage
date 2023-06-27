// import { useState } from 'react'
import FruitLogo from './assets/fruit.svg'
import GitHubLogo from './assets/github-mark-white.svg'
import './App.css'

function App() {

  return (
    <>
      <div>
        <a target="_blank">
          <img src={FruitLogo} className="logo" alt="Fruit Softwares Logo" />
        </a>
      </div>
      <div className="titleSentence">
        <h1>Juice up your tech</h1>
      </div>
      <div className="iconAlign">
        <div className="icons">
            <a href="https://github.com/Fruit-Softwares" target="_blank">
            <img src={GitHubLogo} className="logo" alt="Github" />
          </a>
        </div>
      </div>
    </>
  )
}

export default App
