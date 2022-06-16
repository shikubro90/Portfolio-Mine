import './App.css';
import Card from './PortfolioContainer/test/Card';
import Container from 'react-bootstrap/Container'

function App() {
  return (
    <div>
      <Container className='bg-dark text-white p-3'>
        <Card/>
      </Container>
    </div>
  );
}

export default App;
