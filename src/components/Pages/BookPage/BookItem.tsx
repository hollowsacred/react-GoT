import React, {} from 'react'
import { InjectedPropsItem } from '../../../hoc/withDataItem';
import CharDetails, { Field } from '../../CharDetails/CharDetails';


interface BookItemProp extends InjectedPropsItem {
}


const BookItem:React.FC<BookItemProp> = ({item}) => {
    
  
    return (
        <CharDetails selectedChar={item}>
        <Field field="numberOfPages" label="numberOfPages"/>
        <Field field="publisher" label="publisher"/>
        <Field field="country" label="country"/>
        <Field field="mediaType" label="mediaType"/>
    </CharDetails>
    )
}

export default BookItem;