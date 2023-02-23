import Header from './components/header/Header.jsx';
import Home from './components/home/Home.jsx';
import Yo from './components/yo/Yo.jsx';

import Footer from './components/footer/Footer.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <Home/>
        <Yo/>

        <Footer/>
      </main>
    </div>
  );
}

export default App;
