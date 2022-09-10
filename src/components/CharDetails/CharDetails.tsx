import { iPerson } from "../RandomChar/RandomChar";

interface CharDetailProps {
    selectedChar: iPerson;
}


const CharDetails:React.FC<CharDetailProps> = ({selectedChar}) => {
    let className = "char-details rounded";
    if (Object.keys(selectedChar).length !== 0) {
        className += ' char-details__active';
    }
    
    return (
        <div className={className}>
                <h4>{selectedChar?.name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Gender</span>
                        <span>{selectedChar?.gender}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Born</span>
                        <span>{selectedChar?.born}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Died</span>
                        <span>{selectedChar?.died}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Culture</span>
                        <span>{selectedChar?.culture}</span>
                    </li>
                </ul>
            </div>
    );
}

export default CharDetails;