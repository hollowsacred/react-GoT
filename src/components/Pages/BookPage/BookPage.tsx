import React from 'react'
// import { IBook } from '../../../App';
import { InjectedProps } from '../../../hoc/withData';
import GotService from '../../../services/GotService';
import ErrorMessage from '../../ErrorMessage/ErrorMessage';
import ItemList from '../../ItemList/ItemList';


export type IBook = {
  url: string;
  name: string;
  authors: [];
  numberOfPages: number | string;
  publisher: string;
  country: string;
  mediaType: string;
}


interface IBookPageProps extends InjectedProps {}
 
class BookPage extends React.Component<IBookPageProps> {

    gotService = new GotService();

    render() {

      if (this.props.stateProp.stateError ) {
      return <ErrorMessage />
      }
      
      const itemList = (
        <ItemList selectChar={this.props.selectItem} getData={this.gotService.getAllBooks<IBook[]>} itemType='books' />
      );
  
        return (
          {...itemList}
        )

    }
}

export default BookPage;