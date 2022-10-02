import React, {} from 'react'
import { InjectedPropsItem } from '../../../hoc/withDataItem';
import CharDetails, { Field } from '../../CharDetails/CharDetails';


interface CharacterItemProp extends InjectedPropsItem {
}


const CharacterItem:React.FC<CharacterItemProp> = ({item}) => {
    
    return (
        <CharDetails selectedChar={item}>
        <Field field="name" label="name"/>
        <Field field="gender" label="gender"/>
        <Field field="culture" label="culture"/>
        <Field field="born" label="born"/>
    </CharDetails>
    )
}

export default CharacterItem;