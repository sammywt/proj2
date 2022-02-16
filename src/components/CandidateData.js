import { Link } from "react-router-dom";

const CandidateData = ({candidate}) => {
    // console.log(candidate[0])
    return (
      
        candidate?.map((i, index) => (
            <ul key={index}>
                <h2>CANDIDATE INFO</h2>
                <li>NAME: {i.name}</li>
                <li>PARTY: {i.party}</li>
                <li>TOTAL FROM INDIVIDUAL DONORS: {i.total_from_individuals}</li>
                <li>TOTAL FROM PACS (Political Action Committees): {i.total_from_pacs}</li>
                <li>TOTAL CONTRIBUTIONS: {i.total_contributions}</li>
                <p>
                <Link to={'/ContactInfo/'}>Contact info</Link>
                </p>
            </ul>
        ))
    )
    
}

export default CandidateData;