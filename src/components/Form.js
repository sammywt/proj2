import { useState } from "react";
import { Link } from "react-router-dom";
import CandidateInfo from "./CandidateInfo";
import { Route } from "react-router";
import { Routes } from "react-router";
import { Navigate } from "react-router";
import ExpenditureInfo from "./ExpenditureInfo";



const Form = ({fecId, setFecId, expenditures, handleSubmit}) => {
    // const [fecId, setFecId] = useState("");
    // const [candidate, getCandidate] = useState([]);
    // const [expenditures, getExpenditures] = useState([]);

    // const urlBase = 'https://api.propublica.org/campaign-finance/v1/2020/candidates/'

    // let url = `${urlBase}${fecId}.json`

    // const urlEnd = '/independent_expenditures.json'

    // let urlSpending = `${urlBase}${fecId}${urlEnd}`
    
    //     const handleSubmit = (e) => {
    //         e.preventDefault();
            
    //         fetch(url, {
    //             headers: {
    //               "X-Api-Key": 'n5oTwM9UmrutiH1fyEXMnvxC1BslYogT13YjWAXT'
    //             }
    //           })
    //             .then((response)=>response.json())
    //             .then((data) => getCandidate(data.results))
    //             .catch(() => console.log('data fetch failure'));

    //             fetch(urlSpending, {
    //                 headers: {
    //                   "X-Api-Key": 'n5oTwM9UmrutiH1fyEXMnvxC1BslYogT13YjWAXT'
    //                 }
    //               })
    //                 .then((response)=>response.json())
    //                 .then((data) => getExpenditures(data?.results))
    //                 .catch(() => console.log('Second data fetch failure'))

    //     }
      
    // const candidateData = candidate.map((i, index) => {
    //     return (
    //     <ul key={index}>
    //         <h2>CANDIDATE INFO</h2>
    //         <li>NAME: {i.name}</li>
    //         <li>PARTY: {i.party}</li>
    //         <li>TOTAL FROM INDIVIDUAL DONORS: {i.total_from_individuals}</li>
    //         <li>TOTAL FROM PACS (Political Action Committees): {i.total_from_pacs}</li>
    //         <li>TOTAL CONTRIBUTIONS: {i.total_contributions}</li>
    //         <p>
    //             <Link to={'/ContactInfo/'}>Contact info</Link>
    //         </p>
    //     </ul>
    //     )
    // })

    const expenditureData = expenditures?.map((i, index) => {
        return (
            <ul key={index}>
                <li>PURPOSE: {i.purpose}</li>
                <p><Link to={'/ExpenditureDetails'}>details</Link></p>
            </ul>
        )
    });

    
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
             
            {/* {candidateData ? candidateData : 'NO AVAILABLE DATA'} */}

            {/* <Routes>
                <Route path='/ContactInfo/'  element= {<CandidateInfo candidate={candidate}/>} /> */}
                {/* <Route path='/ExpenditureDetails/' element={<ExpenditureInfo expenditures={expenditures}/>} /> */}
            {/* </Routes> */}
            {/* passing {candidate} down to candidateInfo.js by naming it candidate */}

            {expenditureData ? expenditureData : 'NO AVAILABLE DATA'}

         

        </div>
    )
}

export default Form;

