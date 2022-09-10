import React, {MouseEventHandler, useState} from 'react';
import {Container, Row, Col} from 'reactstrap'
import CharacterPage from './components/CharacterPage/CharacterPage';
import CharDetails from './components/CharDetails/CharDetails';
import Header from './components/Header/Header';
import ItemList from './components/ItemList/ItemList';
import RandomChar, {checkNull, iPerson} from './components/RandomChar/RandomChar';


import './scss/style.scss';

function App() {

const [showRandomChar, setShowRandomChar] = useState(true);
const [selectedChar, setSelectedChar] = useState<iPerson>({} as iPerson);
 function onClick ()  {
  setShowRandomChar(!showRandomChar);
}

// const selectChar:MouseEventHandler<HTMLLIElement> = (person: iPerson) => {
//   setSelectedChar(person)
// }

function selectChar(person: iPerson) {
  checkNull(person);
  setSelectedChar(person);
  console.log('Кликнули наконец то......')
  
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
         showRandomChar &&  <RandomChar />
            }
        </Col>
      </Row>
      <Row>
      <Col lg={{size:5,offset:0}} style={{marginBottom: 10}}>
          <button onClick={onClick} className='btn-toggle'>Toggle Random Person</button>
        </Col>
      </Row>
          <CharacterPage selectChar={selectChar} selectedChar={selectedChar}/>
    </Container>
    </div>
    
  );
          
}

export default App;
