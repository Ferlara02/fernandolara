import Header from './components/header/Header.jsx';
import Home from './components/home/Home.jsx';
import Yo from './components/yo/Yo.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <Home/>
        <Yo/>
      </main>
    </div>
  );
}

export default App;
