import React, {MouseEventHandler, useState} from 'react';
import {Container, Row, Col} from 'reactstrap'
import { IBook, IHouses, IItems } from '../../App';
import GotService from '../../services/GotService';
import CharDetails, { Field } from '../CharDetails/CharDetails';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Header from '../Header/Header'
import ItemList from '../ItemList/ItemList';
import RandomChar, {checkNull, iPerson} from '../RandomChar/RandomChar';
import RowBlock from '../RowBlock/RowBlock';


interface ICharacterPage {
    selectChar: (person: iPerson) => void;
    selectedChar: iPerson;
}



class CharacterPage extends React.Component<ICharacterPage> {
    gotService = new GotService();
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
       
        const itemList = (
            <ItemList selectChar={this.props.selectChar} getData={this.gotService.getAllCharacters<iPerson[]>} />
        )
        
        const charDetails = (
            <CharDetails selectedChar={this.props.selectedChar}>
                <Field field="gender" label="Gender"/>
                <Field field="born" label="Born"/>
                <Field field="died" label="Died"/>
                <Field field="culture" label="Culture"/>
            </CharDetails>
        )

        return (
          <RowBlock left={itemList} right={charDetails} />
        );
    }
} 

export default CharacterPage;