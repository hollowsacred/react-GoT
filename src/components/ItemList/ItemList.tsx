import React,{useState, useEffect, MouseEventHandler} from 'react';
import { IItems } from '../../App';
import GotService from "../../services/GotService";
import {iPerson} from '../RandomChar/RandomChar';

interface AdditionalPerson extends iPerson {
    url?: string;
}

interface ItemListProps {
    selectChar:<T extends IItems> (person: T) => void
    getData: () => Promise<IItems[]>
}



const ItemList:React.FC<ItemListProps> = ({selectChar, getData}) => {
    const goService = new GotService();
    const [itemList, setItemList] = useState<AdditionalPerson[] | null>(null);
  
    useEffect(() => {
       async function getItemList() {
            let items = await getData()
            setItemList(items);
       }
       getItemList();
    },[])

    if (!itemList) {
        return <div>Загрузка</div>;
    }
    return (
        <>
        <ul className="item-list list-group">
        {itemList.map(item => <li className="list-group-item" key={item.url} onClick={() => {selectChar(item)}}>{item.name} </li>
       )}
        </ul>
        </>
       
    );
}

export default ItemList;