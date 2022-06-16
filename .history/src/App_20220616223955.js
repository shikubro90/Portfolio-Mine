import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Experiance from './components/experiance/experiance';
import Service from './components/Service/Service';
import Portfolio from './components/portfolio/portfolio';
import Testimonials from './components/testimonials/testimonials';
import Contact from './components/Contact/Contact';


function App() {
  return (
    <div>
      <Header />
      <Nav />
      <About />
      <Experiance />
      <Service />
      <Portfolio />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;
