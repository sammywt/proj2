import { useState, useEffect } from "react"
import { Link } from "react-router-dom";


const OneCandidate = () => {
    const [name, getName] = useState([]);

    useEffect(() => {
        fetch("https://api.propublica.org/campaign-finance/v1/2020/candidates/P60007168.json", {
            headers: {
                "X-Api-Key": "n5oTwM9UmrutiH1fyEXMnvxC1BslYogT13YjWAXT"
            }
        })
        .then((response)=>response.json())
        .then((data) => console.log(data.results))
        //all data nested below results
        .catch(() => console.log('data fetch failure'))
    }, [])

    const mapName = name.map((i, index) => {
        
            <ul key={index}>
                <Link to='/'>{i.name}</Link>
            </ul>
        
    });

    return(
        <div>
            {mapName}
        </div>
    )
}

export default OneCandidate;