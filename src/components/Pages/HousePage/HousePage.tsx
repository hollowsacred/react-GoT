import React from 'react';
import {IHouses} from '../../../App';
import { InjectedProps } from '../../../hoc/text';
import GotService from '../../../services/GotService';
import CharDetails, { Field } from '../../CharDetails/CharDetails';
import ErrorMessage from '../../ErrorMessage/ErrorMessage';
import ItemList from '../../ItemList/ItemList';
import { checkNull } from '../../RandomChar/RandomChar';
import RowBlock from '../../RowBlock/RowBlock';



interface IHousePage extends InjectedProps {}

class HousePage extends React.Component<IHousePage> {
    gotService = new GotService();

    render() {
        if (this.props.stateProp.stateError) {
            return <ErrorMessage />
        }
       
        const itemList = (
            <ItemList selectChar={this.props.selectItem} getData={this.gotService.getAllHouses<IHouses[]>} itemType='houses' />
        )
        
   

        return (
           {...itemList}
        );
    }
} 

export default HousePage;