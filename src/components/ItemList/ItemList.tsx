import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { iPerson } from '../RandomChar/RandomChar';

interface AdditionalPerson extends iPerson {
    url: string;
    itemId: string;
}

interface ItemListProps {
    selectChar: <T extends object> (person: T) => void
    getData: () => Promise<any[]>
    itemType: string
}

function getId(url?: string) {
    return url?.match(/\b\d*\b/g)?.join('');
}


const ItemList: React.FC<ItemListProps> = ({ selectChar, getData, itemType }) => {

    const [itemList, setItemList] = useState<AdditionalPerson[] | null>(null);

    useEffect(() => {
        async function getItemList() {
            let items = await getData()
            console.log(items);
            setItemList(items);
        }
        getItemList();
    }, [])

    if (!itemList) {
        return <div>Загрузка</div>;
    }
    return (
        <>
            <ul className="item-list list-group">
                {itemList.map((item, index) =>
                    <Link key={getId(item.url)} to={`/${itemType}/${getId(item.url)}`}>
                        <li className="list-group-item" onClick={() => { selectChar(item) }}>{item.name} </li>
                    </Link>

                )}
            </ul>
        </>

    );
}

export default ItemList;