import React,{useState, useEffect, MouseEventHandler} from 'react';
import GotService from "../../services/GotService";
import {iPerson} from '../RandomChar/RandomChar';

interface AdditionalPerson extends iPerson {
    url?: string;
}

interface ItemListProps {
    selectChar: (person: iPerson) => void
}



const ItemList:React.FC<ItemListProps> = ({selectChar}) => {
    const goService = new GotService();
    const [charList, setCharList] = useState<AdditionalPerson[] | null>(null);
  
    useEffect(() => {
       async function getCharList() {
            let persons = await goService.getAllCharacters<AdditionalPerson[]>()
            console.log(persons);
            setCharList(persons);
           
       }
       getCharList();
    },[])

    if (!charList) {
        return <div>Загрузка</div>;
    }
    return (
        <>
        <ul className="item-list list-group">
        {charList.map(person => <li className="list-group-item" key={person.url} onClick={() => {selectChar(person)}}>{person.name} </li>
       )}
        </ul>
        </>
       
    );
}

export default ItemList;