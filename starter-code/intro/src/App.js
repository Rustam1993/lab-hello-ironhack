import React, { Component } from 'react';
import logo from './ironhack-logo.svg';
import navLogo from './menu-top.svg';
import './App.css';
import Images from './images.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <section> 
          <header>
            <img src = {logo}  alt="logo"/>
            <img src = {navLogo} alt="navLogo"/>
          </header>
          <div className="say-hello">
            <h1>Say Hello to</h1>
            <h1>ReactJS</h1>
            <p>You will learn a frontend</p>
            <p>framework from scratch, to</p>
            <p>become a Ninka Developer</p>
            <button>Awesome</button>
          </div>
        </section>
        <Images />
        
      </div>
    );
  }
}

export default App;
