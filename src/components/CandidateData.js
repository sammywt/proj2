import { Link, Routes, Route} from "react-router-dom";
import CandidateDetails from "./CandidateDetails";

const CandidateData = ({candidate}) => {
      
       const candidateInfo= candidate?.map((i, index) => (
            <ul key={index} className={i.party==='REP' ? 'REP' : 'DEM'}>
                <h2>CANDIDATE INFO</h2>
                <li>NAME:</li>
                <li>{i.name}</li>
                <li>PARTY:</li>
                <li>{i.party}</li>
                <li>TOTAL FROM INDIVIDUAL DONORS</li>
                <li>{i.total_from_individuals}</li>
                <li>TOTAL FROM PACS (Political Action Committees)</li>
                <li>{i.total_from_pacs}</li>
                <li>TOTAL CONTRIBUTIONS</li>
                <li>{i.total_contributions}</li>
                <p>
                <Link to={'/ContactInfo'}>Contact info</Link>
                </p>
            </ul>
        ))
        return (
            <div>
                {candidateInfo}
            </div>
    )
}

export default CandidateData;