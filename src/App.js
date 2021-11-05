
import './App.css';
import React, { Component } from 'react';
import Navbar from './component/Navbar';
import Banner from './component/Banner';
import Cards from './component/Cards';
import Search from './component/Search';
import Logos from './component/Logos';
import Footer from './component/Footer';

 class App extends Component {
  render() {
    return (
      <div> 
        <Navbar />
       <Banner />
       <Cards />
       <Search />
       <Logos />
       <Footer />
      </div>
    );
  }
}

export default App;
