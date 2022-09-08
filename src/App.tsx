import React, {useState} from 'react';
import {Container, Row, Col} from 'reactstrap'
import CharDetails from './components/CharDetails';
import Header from './components/Header';
import ItemList from './components/ItemList';
import RandomChar from './components/RandomChar';
import './scss/style.scss';

function App() {

const [clicked, setClick] = useState(true);

 function onClick ()  {
  setClick(!clicked);
}

  return (
    <div className='app'>
    <Container>
      <Header />
    </Container>
    <Container>
      <Row>
        <Col lg={{size:5,offset:0}}>
          { 
         clicked &&  <RandomChar />
            }
        </Col>
      </Row>
      <Row>
      <Col lg={{size:5,offset:0}} style={{marginBottom: 10}}>
          <button onClick={onClick} className='btn-toggle'>Toggle Random Person</button>
        </Col>
      </Row>
      <Row>
        <Col md="6">
          <ItemList />
        </Col>
        <Col md="6">
            <CharDetails />
        </Col>
      </Row>
    </Container>
    </div>
    
  );
}

export default App;
