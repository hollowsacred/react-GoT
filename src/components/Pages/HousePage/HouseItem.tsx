import React from 'react'
import { InjectedPropsItem } from '../../../hoc/withDataItem';
import CharDetails, { Field } from '../../CharDetails/CharDetails';


interface HouseItemProp extends InjectedPropsItem {
}


const HouseItem: React.FC<HouseItemProp> = ({ item }) => {
    
    return (
        <CharDetails selectedChar={item}>
            <Field field="name" label="name" />
            <Field field="region" label="region" />
            <Field field="coatOfArms" label="coatOfArms" />
            <Field field="words" label="words" />
        </CharDetails>
    )
}

export default HouseItem;