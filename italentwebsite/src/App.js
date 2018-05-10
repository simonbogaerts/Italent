import React, { Component } from 'react';
import './App.css';
import Internationalisering from './components/internationalisering/internationalisering';
import Innovatie from './components/innovatie/innovatie';
import Seminaries from './components/seminaries/seminaries';
import StudentenEngagement from './components/studentengagemant/studentengagement';
import Footer from './components/footer/footer';
import Reflecties from './components/reflecties/reflecties';
import Introductie from './components/introductie/introductie';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Introductie />
        <Internationalisering />
        <Innovatie />
        <Seminaries />
        <StudentenEngagement />
        <Reflecties />
        <Footer />
      </div>
    );
  }
}

export default App;
