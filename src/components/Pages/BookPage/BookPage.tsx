import React from 'react'
import { IBook } from '../../../App';
import { InjectedProps } from '../../../hoc/text';
import GotService from '../../../services/GotService';
import CharDetails, { Field } from '../../CharDetails/CharDetails';
import ErrorMessage from '../../ErrorMessage/ErrorMessage';
import ItemList from '../../ItemList/ItemList';
import { checkNull, iPerson } from '../../RandomChar/RandomChar';
import RowBlock from '../../RowBlock/RowBlock';




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