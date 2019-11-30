import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Finder from './components/Finder';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
			<Finder />
			<Footer />
    </div>
  );
}

export default App;
