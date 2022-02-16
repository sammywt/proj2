import { Link } from "react-router-dom"
import ExpenditureDetails from "./ExpenditureInfo";


const ExpenditureData = ({expenditures}) => {
    return (
        expenditures.map((i, index) => (
            <ul key={index}>
                <li>PURPOSE: {i.purpose}</li>
                <p>details</p>
                <div className='toggle'>
                    <li>AMOUNT: {i.amount}</li>
                    <li>PURPOSE: {i.purpose}</li>
                    <li>RECIPIENT: {i.payee}</li>
                    <li>SUPPORT OR OPPOSE: {i.support_or_oppose}</li>
                </div>
            </ul>
        ))
    )
}

export default ExpenditureData;