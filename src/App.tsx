import React from 'react';
import './App.scss';
import Header from './app/components/Header';
import { FirstPage } from './pages/HomePage/FirstPage';
import { FooterPage } from './app/components/screens/Footer/FooterPage';

function App() {
  return (
    <div className="App">
      <Header />
      <FirstPage />
      <FooterPage />
    </div>
  );
}

export default App;
