


const ExpenditureInfo = ({expenditures}) => {
    console.log(expenditures)
    return (
        <ul>
            <li>AMOUNT: {expenditures[0].amount}</li>
        </ul>
    )
}

export default ExpenditureInfo;