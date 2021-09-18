import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from 'components/Navigation/Navigation';
import Profile from 'components/Profile/Profile';
import Routes from 'components/Routes/Routes';
import Footer from 'components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Profile />
        <Routes />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
