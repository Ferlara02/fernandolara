import Header from './components/header/Header.jsx';
import Home from './components/home/Home.jsx';
import Yo from './components/yo/Yo.jsx';
import Portfolio from './components/portfolio/portfolio.jsx';
import Footer from './components/footer/Footer.jsx';
import './App.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import useLocalStorage from 'use-local-storage';


function App() {
  useEffect(() => {
    AOS.init();
  }, [])

  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");
  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme)
  }

  return (
    <div className="App" data-theme={theme}>
      <Header/>
      <div className='theme-toggle' onClick={switchTheme
      }>
        {theme === "light" ? <i class="uil uil-moon"></i> : <i class="uil uil-sun"></i>}
      </div>
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
