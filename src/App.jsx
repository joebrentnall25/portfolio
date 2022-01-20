import './App.scss';
import Intro from "./Containers/Intro/Intro";
import About from './Containers/About/About';
import Skills from './Containers/Skills/Skills';

function App() {
  return (
    <div className="App">
      <Intro/>
      <About/>
      <Skills/>
    </div>
  );
}

export default App;
