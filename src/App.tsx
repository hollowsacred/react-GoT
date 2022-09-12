import React, {MouseEventHandler, useState} from 'react';
import {Container, Row, Col} from 'reactstrap'
import BookPage from './components/BookPage/BookPage';
import CharacterPage from './components/CharacterPage/CharacterPage';
import CharDetails from './components/CharDetails/CharDetails';
import Header from './components/Header/Header';
import ItemList from './components/ItemList/ItemList';
import RandomChar, {checkNull, iPerson} from './components/RandomChar/RandomChar';
import './scss/style.scss';

export type IBook = {
  url?: string;
  name?: string;
  authors?: [];
  numberOfPages?: number | string;
  publisher?: string;
  country?: string;
  mediaType?: string;
}

export type IHouses = {
  url?: string,
  name?: string,
  region?: string,
  coatOfArms?: string,
  words?: string,
}

export type IItems = iPerson | IBook | IHouses;



function App() {

const [showRandomChar, setShowRandomChar] = useState(true);
const [selectedChar, setSelectedChar] = useState({});
 function onClick ()  {
  setShowRandomChar(!showRandomChar);
}

// const selectChar:MouseEventHandler<HTMLLIElement> = (person: iPerson) => {
//   setSelectedChar(person)
// }

function selectChar<T extends IItems>(item: T) {
  checkNull(item);
  setSelectedChar(item);
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
          <BookPage selectChar={selectChar} selectedChar={selectedChar}/>
    </Container>
    </div>
    
  );
          
}

export default App;
