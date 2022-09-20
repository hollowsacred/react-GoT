import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { IBook } from '../../../App';
import GotService from '../../../services/GotService';
import CharDetails, { Field } from '../../CharDetails/CharDetails';
import ItemList from '../../ItemList/ItemList';
import RowBlock from '../../RowBlock/RowBlock';

interface IBooksItem {
   
}


const BooksItem:React.FC<IBooksItem> = () => {
    const gotService = new GotService();
    const {id} = useParams();
    const [item, setItem] = useState({});

    useEffect( () => {
       gotService.getBook<IBook>(id).then(dataItem => setItem(dataItem));
       
    },[]);

    return (
        <CharDetails selectedChar={item}>
        <Field field="numberOfPages" label="numberOfPages"/>
        <Field field="publisher" label="publisher"/>
        <Field field="country" label="country"/>
        <Field field="mediaType" label="mediaType"/>
    </CharDetails>
    )
}

export default BooksItem;