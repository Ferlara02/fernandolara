import Header from './components/header/Header.jsx';
import Home from './components/home/Home.jsx';
import Yo from './components/yo/Yo.jsx';
import Portfolio from './components/portfolio/portfolio.jsx';
import Footer from './components/footer/Footer.jsx';
import './App.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="App">
      <Header/>
      <main>
        <Home/>
        <Yo/>
        <Portfolio/>
        <Footer/>
      </main>
    </div>
  );
}

export default App;
