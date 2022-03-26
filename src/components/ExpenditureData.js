import SingleExpenditure from "./SingleExpenditure";
import SearchFail from "./SearchFail";


const ExpenditureData = ({expenditures}) => {
        const mapExpend = expenditures?.map((i, index) => (
          <SingleExpenditure i={i} key={index} />
        ))

        

        return ( <div className='spend-cards'>
        {mapExpend}
      </div>)


    

//shorthand for jsx if statement- if mapexpend exists, do everything that follows up until the second brace
  //if mapexpend is null, display component that says search error
  // return
      //    {
      //      
  // <div className='spend-cards'>
            // if(mapExpend===null){
            //   <SearchFail />
            // } else{ 
    //     mapExpend && 
    //     {mapExpend}
  // }
    //   </div>
    // }
    
}

export default ExpenditureData;
