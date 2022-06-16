import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import About from './components/about/about';
import Experiance from './components/experiance/experiance';
import Service from './components/service/services';
import Portfolio from './components/portfolio/portfolio';
import Testimonials from './components/testimonials/testimonials';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';

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
      <Footer />
    </div>
  );
}

export default App;
