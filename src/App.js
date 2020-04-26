import React from 'react';
import './static/css/style.css';
import Header from './Components/Layout/Header';
import Footer from './Components/Layout/Footer';
import Main from './Components/Main.js';
import Banner from './Components/Layout/Banner';


function App() {
  return (
    <div className="App">
      <header className="App-header container-fluid">
        <Header />
        <Banner />
      </header>
      <main class="container-fluid">
        <Main />
      </main>
      <footer class="container-fluid">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
