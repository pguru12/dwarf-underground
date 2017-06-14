import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Title from './Title'
import ParOne from './ParOne'
import ParTwo from './ParTwo'
import Links from './Links'
import Hammer from './Hammer'
//import Adattempt from './Adattempt'
//import SingleSheet from './SingleSheet'
import OtherArticles from './OtherArticles'

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
         {/*<h2>From around the Realm</h2>*/}
            <OtherArticles/>
            {/*Adattempt(https://www.enclavepublishing.com/wp-content/uploads/2015/11/tumblr_inline_mtvwr6T4qH1r8eb4v.gif, orc, Single Orcs in Indianapolis)
            Adattempt(https://images.fineartamerica.com/images-medium-large-5/rocky-mountain-landscape-meadow-in-spring-western-panorama-with-wildflowers-square-format-walt-curlee.jpg, mountain, You won't believe what's under this mountain)
            Adattempt(http://orig01.deviantart.net/a278/f/2010/357/9/7/seamless___gold_coins_by_bartalon-d35iydr.jpg, gold, Mine 20% more gold with One Weird Trick)
            Adattempt(http://cdn23.us1.fansshare.com/photos/thehobbit/the-hobbit-square-characters-833282558.jpg, hobbit, Surprise for Indiana Hobbits born before 1999)            */}
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
