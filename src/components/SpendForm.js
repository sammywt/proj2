import { useState, useEffect } from "react";


const SpendForm = () => {
    const [fecId, setFecId] = useState("");
    const [candidate, getCandidate] = useState([]);

    const urlBegin = 'https://api.propublica.org/campaign-finance/v1/2020/candidates/'

    const urlEnd = '/independent_expenditures.json'

    let urlSpending = `${urlBegin}${fecId}${urlEnd}`


    // const CallingAPI = () => {
        useEffect(() => {
            fetch(urlSpending, {
                headers: {
                  "X-Api-Key": 'n5oTwM9UmrutiH1fyEXMnvxC1BslYogT13YjWAXT'
                }
              })
                .then((response)=>response.json())
                .then((data) => getCandidate(data?.results))
                .catch(() => console.log('Second data fetch failure'))
            }, [])
    // } 
    const candidateData = candidate?.map((i, index) => {
        return (
        <ul key={index}>
            {/* {console.log(i)} */}
            <li>{i.candidate_name}</li>
            <li>{i.fec_committee_name}</li>
            <li>{i.amount}</li>
            <li>{i.purpose}</li>
            <li>{i.payee}</li>
            <li>{i.support_or_oppose}</li>
        </ul>
        )
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(fecId);
        console.log(url);
    }
    console.log(candidate);
    return(
        <div>
            <form onSubmit={handleSubmit}>
            <label>Enter candidate FEC ID 
                <input 
                type = "text" 
                value={fecId}
                onChange={(e) => setFecId(e.target.value)} />
            </label>
            <input type='submit'/>
            </form>
            {candidateData}
        </div>
    )
}

export default SpendForm;