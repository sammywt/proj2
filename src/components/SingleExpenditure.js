import { useState } from "react";

const SingleExpenditure = ({i}) => {

    const [isActive, setActive] = useState(false);
    const ToggleClass = () => {
        setActive(!isActive);
    }
    return (
        <ul className={i.support_or_oppose==='O' ? 'OPP' : 'SUP'}>
            <li>PURPOSE: {i.purpose}</li>
            <p onClick={ToggleClass}>details</p>
            <div className={isActive ? 'active' : 'notActive'}>
                <li>COMMITTEE: {i.fec_committee_name}</li>
                <li>AMOUNT: {i.amount}</li>
                <li>PURPOSE: {i.purpose}</li>
                <li>RECIPIENT: {i.payee}</li>
                <li>SUPPORT OR OPPOSE: {i.support_or_oppose}</li>
            </div>
        </ul>
    )
}

export default SingleExpenditure;
//https://devdojo.com/krissanawat101/3-ways-for-toggle-a-class-in-react`