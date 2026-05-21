import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/Navigation/Header';
import { Footer } from './components/Navigation/Footer';
import NavigationRouter from './components/Navigation/NavigationRouter';
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main>
          <NavigationRouter />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
