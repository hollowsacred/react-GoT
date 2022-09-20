import React from 'react';
import { IBook, IHouses, IItems } from "../../App";
import { iPerson } from "../RandomChar/RandomChar";

type FieldProps = Record<string,string>;

export function Field({selectedChar, field, label}:FieldProps) {
    return(
        <li className="list-group-item d-flex justify-content-between">
        <span className="term">{label}</span>
        <span>{selectedChar[field as keyof typeof Field]}</span>
    </li>
    )
}


interface CharDetailProps {
    selectedChar: iPerson;
    children?: React.ReactNode;
}


const CharDetails:React.FC<CharDetailProps> = ({selectedChar, children}) => {
    let className = "char-details rounded char-details__active";

    if (!selectedChar) {
        return (<div style={{color: 'white', fontSize:30}}>Select item in the list</div>);
    }

    if (Object.entries(selectedChar).length === 0) return <div>Загрузка...</div>

    return (
        <div className={className}>
                <h4>{selectedChar.name}</h4>
                <ul className="list-group list-group-flush">
                    {React.Children.map(children, (child: any)  => {
                        return (
                           React.cloneElement(child,{selectedChar})
                        )
                    })}
                </ul>
            </div>
    );
}

export default CharDetails;