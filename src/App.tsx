import React, {MouseEventHandler, useState} from 'react';
import {Container, Row, Col} from 'reactstrap'
import BookPage from './components/Pages/BookPage/BookPage';
import BooksItem from './components/Pages/BookPage/BooksItem';
import CharacterPage from './components/Pages/CharacterPage/CharacterPage';
import CharDetails from './components/CharDetails/CharDetails';
import Header from './components/Header/Header';
import ItemList from './components/ItemList/ItemList';
import RandomChar, {checkNull, iPerson} from './components/RandomChar/RandomChar';
import HousePage from './components/Pages/HousePage/HousePage';
import {BrowserRouter as Router, Routes,
  Route} from "react-router-dom";
import './scss/style.scss';
import withData from './hoc/text';


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

 function onClick ()  {
  setShowRandomChar(!showRandomChar);
}

const HighCharacterPage = withData(CharacterPage);
const HighBookPage = withData(BookPage);
const HighHousePage = withData(HousePage);
// const selectChar:MouseEventHandler<HTMLLIElement> = (person: iPerson) => {
//   setSelectedChar(person)
// }

//  function selectChar<T extends IItems>(item: T, state: T) {
//   checkNull(item);
//   setSelectedChar(item);
//   console.log('Кликнули наконец то......')
  
// }



  return (
    <Router>
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
            <Routes>
              <Route path='/' element={<div style={{color:'white', fontSize:'30px', textShadow:'2px 2px black'}}>Main page</div>}/>
              <Route path='/characters'
               element={<HighCharacterPage />}/>
              <Route path='/houses'
               element={<HighHousePage />}/>
                <Route path='/books'
               element={<HighBookPage />}/>
               <Route path='/books/:id' element={<BooksItem/>}/>
               <Route path="*" element={<div style={{color: 'white', fontSize: 50}}>Ниче не найдено</div>}/>
            </Routes>
        
         
          
    </Container>
    </div>
    </Router>

    
  );
          
}

export default App;
