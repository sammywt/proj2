import SingleExpenditure from "./SingleExpenditure";


const ExpenditureData = ({expenditures}) => {
        const mapExpend = expenditures.map((i, index) => (
          <SingleExpenditure i={i} key={index} />
        ))

    return(
      <div className='spend-cards'>
        {mapExpend}
      </div>
    )
}

export default ExpenditureData;
