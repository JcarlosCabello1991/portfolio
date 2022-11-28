import './App.css';
import Hero from './components/Hero/Hero.tsx';
import Appbar from './components/AppBar/Appbar.tsx';
import Projects from './components/Projects/Projects.tsx';
import Cv from './components/Cv/Cv.tsx';
import Technologies from './components/Tech/Technologies.tsx';
import Contact from './components/Contact/Contact.tsx';

function App() {
  return (
    <div className="App">
      <Appbar />
      <Hero />
      <Projects />
      <Cv />
      <Technologies />
      <Contact />
    </div>
  );
}

export default App;
