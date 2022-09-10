import { useEffect, useState } from "react";
import GotService from "../../services/GotService";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

 export interface iPerson {
    name: string,
    gender: string,
    born: string,
    died: string,
    culture: string,

}

interface IRandomCharProps {
}

interface ViewProps {
    person: iPerson;
}


export function checkNull(person: iPerson) {
    for (let [key, value] of Object.entries(person)) {
        if (!value) {
            person[key as keyof iPerson] = "Данные Отсутствуют";
           
        }
}
}


let serviceObj = new GotService();

const RandomChar:React.FC = () => {
 
    const [person, setPerson] = useState<iPerson>({} as iPerson);
    const [loading, setLoad] = useState(true);
    const [error, setError] = useState(false);
    useEffect(() => {

     const timerid = setInterval(() => {
        changePerson().then(res => {
            setPerson(res);
            setLoad(false);
        }).catch(onError);

       },2000);
       return () => {clearInterval(timerid); console.log('unmount')};
       
        // setInterval(() => changePerson().then(res => setPerson(res)),5000);
    },[])

    

    const onError = (err: Error) => {
        setError(true);
        setLoad(true);
    }
    // function getRandomIndex(): number {
    //     return Math.floor(Math.random() * 100);
    // }

   async function changePerson() {
    console.log('update');
        let id = Math.floor(Math.random() * 140 + 25);
        console.log(id);
        let person = await serviceObj.getCharacter<iPerson>(id);
       
        checkNull(person);
        // for (let [key, value] of Object.entries(person)) {
        //         if (!value) {
        //             person[key as keyof iPerson] = "Данные Отсутствуют";
                   
        //         }
        // }

        return person;
    }

    
   let content = error ? <ErrorMessage /> : loading ? <div style={{fontSize:50}}>
        Загрузка...
        </div>: <View person={person}/>
    return (
        <div className="random-block rounded">
            {content}
    </div>
    ) 
}


const View:React.FC<ViewProps> = ({person}) => {
    return (
        <>
  
        <h4>Random Character: {person.name}</h4>
        <ul className="list-group list-group-flush">
            <li className="list-group-item d-flex justify-content-between">
                <span className="term">Gender </span>
                <span>{person.gender}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
                <span className="term">Born </span>
                <span>{person.born}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
                <span className="term">Died </span>
                <span>{person.died}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
                <span className="term">Culture </span>
                <span>{person.culture}</span>
            </li>
        </ul>
        </>
    )
}
export default RandomChar;