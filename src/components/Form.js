import { useState } from "react";
import { Link } from "react-router-dom";
import CandidateInfo from "./CandidateInfo";
import { Route } from "react-router";
import { Routes } from "react-router";
import { Navigate } from "react-router";



const Form = () => {
    const [fecId, setFecId] = useState("");
    const [candidate, getCandidate] = useState([]);
    const [expenditures, getExpenditures] = useState([]);

    const urlBase = 'https://api.propublica.org/campaign-finance/v1/2020/candidates/'

    let url = `${urlBase}${fecId}.json`

    const urlEnd = '/independent_expenditures.json'

    let urlSpending = `${urlBase}${fecId}${urlEnd}`
    
        const handleSubmit = (e) => {
            e.preventDefault();
            
            fetch(url, {
                headers: {
                  "X-Api-Key": 'n5oTwM9UmrutiH1fyEXMnvxC1BslYogT13YjWAXT'
                }
              })
                .then((response)=>response.json())
                .then((data) => getCandidate(data.results))
                .catch(() => console.log('data fetch failure'));

                fetch(urlSpending, {
                    headers: {
                      "X-Api-Key": 'n5oTwM9UmrutiH1fyEXMnvxC1BslYogT13YjWAXT'
                    }
                  })
                    .then((response)=>response.json())
                    .then((data) => getExpenditures(data?.results))
                    .catch(() => console.log('Second data fetch failure'))

        }
      
    const candidateData = candidate.map((i, index) => {
        return (
        <ul key={index}>
            <h2>CANDIDATE INFO</h2>
            <li>NAME: {i.name}</li>
            <li>PARTY: {i.party}</li>
            <li>TOTAL FROM INDIVIDUAL DONORS: {i.total_from_individuals}</li>
            <li>TOTAL FROM PACS (Political Action Committees): {i.total_from_pacs}</li>
            <li>TOTAL CONTRIBUTIONS: {i.total_contributions}</li>
            <li><Link to='/CandidateInfo'>Contact info</Link></li>
        </ul>
        )
    })

    const expenditureData = expenditures.map((i, index) => {
        return (
            <ul key={index}>
                <li>PURPOSE: {i.purpose}</li>
                <li>DETAILS</li>
            </ul>
        )
    })

    
    // console.log(candidate);
    return(
        <div>
            <form onSubmit={handleSubmit}>
            <label>Enter candidate FEC ID : 
                <input 
                type = "text" 
                value={fecId}
                onChange={(e) => setFecId(e.target.value)} 
                />
            </label>
            <input 
            type='submit'
            />
            </form>
            {candidateData ? candidateData : 'NO AVAILABLE DATA'}
            
            {expenditureData ? expenditureData : 'NO AVAILABLE DATA'}

            <Routes>
                <Route path='/CandidateInfo/:candidate' element= {<CandidateInfo />} />
            </Routes>

        </div>
    )
}

export default Form;

