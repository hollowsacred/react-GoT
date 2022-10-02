
import React from 'react';
import { InjectedProps } from '../../../hoc/withData';
import GotService from '../../../services/GotService';
import ErrorMessage from '../../ErrorMessage/ErrorMessage';
import ItemList from '../../ItemList/ItemList';
import {iPerson} from '../../RandomChar/RandomChar';


interface ICharacterPage extends InjectedProps {}


class CharacterPage extends React.Component<ICharacterPage> {
    gotService = new GotService();

    render() {
        if (this.props.stateProp.stateError ) {
            return <ErrorMessage />
        }
       
        const itemList = (
            <ItemList selectChar={this.props.selectItem} getData={this.gotService.getAllCharacters<iPerson[]>} itemType='characters'/>
        )

        return (
          {...itemList}
        );
    }
} 

export default CharacterPage;