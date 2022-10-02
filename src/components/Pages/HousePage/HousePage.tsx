import React from 'react';
import { InjectedProps } from '../../../hoc/withData';
import GotService from '../../../services/GotService';
import ErrorMessage from '../../ErrorMessage/ErrorMessage';
import ItemList from '../../ItemList/ItemList';


export type IHouses = {
    url: string,
    name: string,
    region: string,
    coatOfArms: string,
    words: string,
    
  }

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