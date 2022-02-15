import { useState } from "react";


const Form = () => {
    const [fecId, setFecId] = useState("");
    const [candidate, getCandidate] = useState([]);

    const urlBase = 'https://api.propublica.org/campaign-finance/v1/2020/candidates/'

    let url = `${urlBase}${fecId}.json`

    


    // const CallingAPI = () => {
        const handleSubmit = (e) => {
            e.preventDefault();
            fetch(url, {
                headers: {
                  "X-Api-Key": 'n5oTwM9UmrutiH1fyEXMnvxC1BslYogT13YjWAXT'
                }
              })
                .then((response)=>response.json())
                .then((data) => getCandidate(data.results))
                .catch(() => console.log('data fetch failure'))

        }
      
    // } 
    const candidateData = candidate.map((i, index) => {
        return (
        <ul key={index}>
            {/* {console.log(i)} */}
            <li>NAME: {i.name}</li>
            <li>PARTY: {i.party}</li>
            <li>TOTAL FROM INDIVIDUAL DONORS: {i.total_from_individuals}</li>
            <li>TOTAL FROM PACS (Political Action Committees): {i.total_from_pacs}</li>
            <li>TOTAL CONTRIBUTIONS: {i.total_contributions}</li>
        </ul>
        )
    })

    
    // console.log(candidate);
    return(
        <div>
            <form onSubmit={handleSubmit}>
            <label>Enter candidate FEC ID 
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

        </div>
    )
}

export default Form;

