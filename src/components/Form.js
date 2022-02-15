import { useState, useEffect } from "react";


const Form = () => {
    const [fecId, setFecId] = useState("");
    const [candidate, getCandidate] = useState([]);

    const urlBase = 'https://api.propublica.org/campaign-finance/v1/2020/candidates/'

    let url = `${urlBase}${fecId}.json`

    


    // const CallingAPI = () => {
        useEffect(() => {
            fetch(url, {
                headers: {
                  "X-Api-Key": 'n5oTwM9UmrutiH1fyEXMnvxC1BslYogT13YjWAXT'
                }
              })
                .then((response)=>response.json())
                .then((data) => getCandidate(data.results))
                .catch(() => console.log('data fetch failure'))
            }, [])
    // } 
    const candidateData = candidate?.map((i, index) => {
        return (
        <ul key={index}>
            {/* {console.log(i)} */}
            <li>{i.name}</li>
            <li>{i.party}</li>
            <li>{i.total_from_individuals}</li>
            <li>{i.total_from_pacs}</li>
            <li>{i.total_contributions}</li>
        </ul>
        )
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        // const idNum = {fecId}
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

export default Form;

