import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Title from './Title'
import ParOne from './ParOne'
import ParTwo from './ParTwo'
import Links from './Links'
import Hammer from './Hammer'
import SingleSheet from './SingleSheet'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>

    <main className="expanded row">
        <Title/>
          <ParOne/>

          <ParTwo/>
          <Links/>
          <Hammer/>
      <div className="small-12 columns other-articles">
         <h2>From around the Realm</h2>
          <SingleSheet/>
      </div>
    </main>

    <footer className="expanded row">
      <h6>&copy; 2017 Erebor Industries</h6>
      <h6 className="float-right">All rights reserved</h6>
    </footer>

    
      </div>
    );
  }
}

export default App;
