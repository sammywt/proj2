import {useState} from 'react'
import { useEffect } from 'react';

const GetData = () => {
    const [spending, getSpending] = useState([]);
  //Need to find a way to access the cycle here (2020) so that multiple cycles can be displayed at once
    useEffect(() => {
    fetch("https://api.propublica.org/campaign-finance/v1/2020/independent_expenditures.json", {
        headers: {
          "X-Api-Key": 'n5oTwM9UmrutiH1fyEXMnvxC1BslYogT13YjWAXT'
        }
      })
        .then((response)=>response.json())
        .then((data) => getSpending(data.results))
        .catch(() => console.log('data fetch failure'))
    }, [])
  
    const mapData = spending.map((i, index) => {
          return(
            <p key={index}>{i.payee}</p>
        )
    });

    return(
        <div>
            {mapData}
        </div>
    )
}
export default GetData;