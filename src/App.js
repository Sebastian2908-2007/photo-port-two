import './App.css';
import About from './components/About';
import Gallery from './components/Gallery';
import Nav from './components/Nav';

function App() {
  return (
    <div>
      <Nav></Nav>
<main>
  <Gallery/>
  <About></About>
</main>
    </div>
  );
}

export default App;
