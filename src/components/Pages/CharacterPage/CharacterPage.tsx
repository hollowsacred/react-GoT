import { throws } from 'assert';
import React from 'react';
import { IBook, IItems } from '../../../App';
import { InjectedProps } from '../../../hoc/text';
import GotService from '../../../services/GotService';
import CharDetails, { Field } from '../../CharDetails/CharDetails';
import ErrorMessage from '../../ErrorMessage/ErrorMessage';
import ItemList from '../../ItemList/ItemList';
import {checkNull, iPerson} from '../../RandomChar/RandomChar';
import RowBlock from '../../RowBlock/RowBlock';

// export type TypeState = {
//     item: object,
//     stateError: boolean
// }


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