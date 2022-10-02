import React, {useState} from 'react';
import {Container, Row, Col} from 'reactstrap'
import BookPage from './components/Pages/BookPage/BookPage';
import CharacterPage from './components/Pages/CharacterPage/CharacterPage';
import Header from './components/Header/Header';
import RandomChar from './components/RandomChar/RandomChar';
import HousePage from './components/Pages/HousePage/HousePage';
import {BrowserRouter as Router, Routes,
  Route} from "react-router-dom";
import './scss/style.scss';
import withData from './hoc/withData';
import withDataItem from './hoc/withDataItem';
import BookItem from './components/Pages/BookPage/BookItem';
import CharacterItem from './components/Pages/CharacterPage/CharacterItem';
import HouseItem from './components/Pages/HousePage/HouseItem';




function App() {

const [showRandomChar, setShowRandomChar] = useState(true);

 function onClick ()  {
  setShowRandomChar(!showRandomChar);
}

const HighCharacterPage = withData(CharacterPage);
const HighBookPage = withData(BookPage);
const HighHousePage = withData(HousePage);



const HighBookItem = withDataItem(BookItem, 'getBook');
const HighCharacterItem = withDataItem(CharacterItem, 'getCharacter');
const HighHouseItem = withDataItem(HouseItem, 'getHouse');



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
               <Route path='/characters/:id' element={<HighCharacterItem/>}/>
              <Route path='/houses'
               element={<HighHousePage />}/>
                <Route path='/houses/:id' element={<HighHouseItem/>}/>
                <Route path='/books'
               element={<HighBookPage />}/>
               <Route path='/books/:id' element={<HighBookItem/>}/>
               <Route path="*" element={<div style={{color: 'white', fontSize: 50}}>Ниче не найдено</div>}/>
            </Routes>
        
         
     
    </Container>
    </div>
    </Router>

    
  );
          
}

export default App;

