import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { checkNull } from "../components/RandomChar/RandomChar";
import { TypeSelectedItem } from "../components/CharDetails/CharDetails";
import GotService from "../services/GotService";
export interface InjectedPropsItem {
    item:TypeSelectedItem;
}

type DictionaryKeys = 'getBook'| "getHouse" | 'getCharacter';

function getItem (id: any, key: string): Promise<TypeSelectedItem>  {
  const gotService = new GotService();
  return gotService[key as DictionaryKeys](`${id}`)
}

function withDataItem(WrappedComponent: React.ComponentType<InjectedPropsItem>, key:string) {
    
    return () => {

        const {id} = useParams();
        const [item, setItem] = useState({} as TypeSelectedItem);
        
        useEffect( () => {

           getItem(id,key).then((dataItem: TypeSelectedItem) => {checkNull(dataItem); setItem(dataItem)});           
        },[]);

            return (
                <WrappedComponent item={item} />
            )

        
    }
}
export default withDataItem;