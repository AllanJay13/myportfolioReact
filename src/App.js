import './App.css';
import About from './components/About';
import Cards from './components/Cards';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Footers from './components/Footer';
import Gif from './components/Gif';
import Nav from './components/Nav';

function App() {
  return (
    
    <div className="App">
      <Gif/>
      <Nav/>
      <About/>    
      <Experience/>
      <Cards/>
      <Contact/>
      <Footers/>
    </div>
  );
}

export default App;
