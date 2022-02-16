import { useState } from "react";

const SingleExpenditure = ({i}) => {

    const [isActive, setActive] = useState(false);
    const ToggleClass = () => {
        setActive(!isActive);
    }
    return (
        // expenditures.map((i, index) => (
        <ul>
        <li>PURPOSE: {i.purpose}</li>
        <p onClick={ToggleClass}>details</p>
        <div className={isActive ? 'active' : 'notActive'}>
            <li>AMOUNT: {i.amount}</li>
            <li>PURPOSE: {i.purpose}</li>
            <li>RECIPIENT: {i.payee}</li>
            <li>SUPPORT OR OPPOSE: {i.support_or_oppose}</li>
        </div>
    </ul>
)
}

export default SingleExpenditure;