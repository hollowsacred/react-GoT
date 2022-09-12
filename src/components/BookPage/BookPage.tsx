import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import { IBook } from '../../App';
import GotService from '../../services/GotService';
import CharDetails, { Field } from '../CharDetails/CharDetails';
import ItemList from '../ItemList/ItemList';
import RowBlock from '../RowBlock/RowBlock';

interface IBookPageProps {
    selectChar: (book: IBook) => void;
    selectedChar: IBook;
}

class BookPage extends React.Component<IBookPageProps> {

    gotService = new GotService();

    render() {

      const itemList = (
        <ItemList selectChar={this.props.selectChar} getData={this.gotService.getAllBooks<IBook[]>} />
      );
      const itemDetails = (
        <CharDetails selectedChar={this.props.selectedChar}>
        <Field field="numberOfPages" label="numberOfPages"/>
        <Field field="publisher" label="publisher"/>
        <Field field="country" label="country"/>
        <Field field="mediaType" label="mediaType"/>
    </CharDetails>
      );
        return (
          <RowBlock left={itemList} right={itemDetails} />
        )

    }
}

export default BookPage;