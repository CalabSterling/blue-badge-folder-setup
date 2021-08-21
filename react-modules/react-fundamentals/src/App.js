import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import {
  BrowserRouter as Router,
} from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Header />
      <Router>
        <Sidebar />
      </Router>
      <Footer />
    </div>
  )
}

export default App;
