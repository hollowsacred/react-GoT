import React, {MouseEventHandler, useState} from 'react';
import {Container, Row, Col} from 'reactstrap'
import CharDetails from '../CharDetails/CharDetails';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Header from '../Header/Header'
import ItemList from '../ItemList/ItemList';
import RandomChar, {checkNull, iPerson} from '../RandomChar/RandomChar';

interface ICharacterPage {
    selectChar: (person: iPerson) => void;
    selectedChar: iPerson;
}

class CharacterPage extends React.Component<ICharacterPage> {

    state = {
        stateError: false,
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        this.setState({stateError: true})
    }

    render() {
        if (this.state.stateError) {
            return <ErrorMessage />
        }
       
        return (
            <Row>
            <Col md="6" >
              <ItemList selectChar={this.props.selectChar} />
            </Col>
            <Col md="6">
              {
               <CharDetails selectedChar={this.props.selectedChar}/>
              }
                
            </Col>
          </Row>
        );
    }
} 

export default CharacterPage;