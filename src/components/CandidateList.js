import {useState} from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const CandidateList = () => {
    const [spending, getSpending] = useState([]);
  //Need to find a way to access the cycle here (2020) so that multiple cycles can be displayed at once
    useEffect(() => {
    fetch("https://api.propublica.org/campaign-finance/v1/2016/candidates/P00003392/independent_expenditures.json", {
        headers: {
          "X-Api-Key": 'n5oTwM9UmrutiH1fyEXMnvxC1BslYogT13YjWAXT'
        }
      })
        .then((response)=>response.json())
        .then((data) => getSpending(data.results))
        //all data nested below results
        .catch(() => console.log('data fetch failure'))
    }, [])
  // map loops through an array and returns each set of data in the array, creating a new array with specific data for each set
    const mapData = spending.map((i, index) => {
          return(
            <ul key={index}>
                <Link to='/names'>{i.support_or_oppose}</Link>
                </ul>
        )
    });

    return(
        <div>
            {mapData}
        </div>
    )
}
export default CandidateList;