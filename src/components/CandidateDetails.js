import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import { Params, useParams } from "react-router";

//referencing candidate from Form.js, specifically referencing data instead of using props- destructuring
const CandidateDetails = ({candidate}) => {
   console.log(candidate)
    return(  
       <ul>
           <li>ADDRESS: {candidate[0].mailing_address}</li>
           <li>CITY: {candidate[0].mailing_city}</li>
           <li>STATE: {candidate[0].mailing_state}</li>
           <li>ZIP: {candidate[0].mailing_zip}</li>
           <li>WEBSITE: <a href={candidate[0].url} target='_blank' rel="noopener noreferrer" >{candidate[0].url}</a></li>
           <li>FACEBOOK: <a href={candidate[0].facebook_url} target='_blank' rel="noopener noreferrer" >{candidate[0].facebook_url}</a></li>
           <li>TWITTER HANDLE: {candidate[0].twitter_user}</li>
       </ul>
    )
}

//props is getting data from candidate={candidate} in Form.js, on line 89- this is referncing the state being set on line 12

export default CandidateDetails;

//useParams() comes from the URL, to be used whe trying to pass data down from the URL directly- Whatever comes after : in the route path=' '
//EX: Route path='something/:param/ Also must be passed down in link